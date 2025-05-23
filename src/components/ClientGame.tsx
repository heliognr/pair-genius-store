"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { useGameLogic } from '@/hooks/use-game-logic';
import { GameBoard } from '@/components/game/GameBoard';
import { Header } from '@/components/layout/Header';
import { GameStats } from '@/components/ui/GameStats';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/LanguageContext';
import { PartyPopper, Hourglass, Swords, PlayCircle, Home, HelpCircleIcon, BookOpen, FileText, Palette, Sun, Moon, Laptop, Volume2, Music, MessageCircle, CheckCircle, Trash2, RotateCcw, Save, Info, ShieldCheck, Settings2, Gamepad2, Play, Crown, Trophy } from 'lucide-react'; // LogOut removed
import { useSound } from '@/contexts/SoundContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { addHighScore, getHighScores, clearHighScores as clearHighScoresFromStorage, clearAllHighScoresGlobally as clearAllHighScoresFromStorageGlobally, getAllHighScoresGrouped, type GroupedHighScore, ULTIMATE_CHAMPION_KEY } from '@/lib/highscore';
import type { HighScoreEntry, GameModeId, DifficultyId, SupportedLanguage, Level, UltimateChampionInfo } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LEVELS } from '@/lib/levels';
import { GAME_MODES } from '@/lib/modes';
import { useToast } from '@/hooks/use-toast';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarLabel,
  MenubarCheckboxItem,
} from "@/components/ui/menubar";
import { useTheme } from '@/contexts/ThemeContext';
import { VolumeSlider } from '@/components/controls/VolumeSlider';
import { loadGameState as loadPersistedGameState, clearSavedGameState as clearPersistedGameState } from '@/lib/savegame';
import MusicWithSlash from '@/components/icons/utility/MusicWithSlash';
import Volume2WithSlash from '@/components/icons/utility/Volume2WithSlash';


interface ClientGameProps {
  initialGameStartPending: boolean;
}

export const ClientGame = ({ initialGameStartPending }: ClientGameProps) => {
  const { ensureAudioUnlocked, sfxEnabled, toggleSfx, bgmEnabled, toggleBgm, sfxVolume, setSfxVolume, bgmVolume, setBgmVolume, playBgmForLevel, stopBgm } = useSound();
  const { toast } = useToast();
  const { language, setLanguage, languages } = useTranslation();
  const {
    cards,
    moves,
    matchedPairs,
    gameWon,
    allLevelsBeaten,
    ultimateChampionInfo,
    gameOverReason,
    currentLevel,
    currentDifficultyId,
    setCurrentDifficultyId,
    currentThemeId,
    setCurrentThemeId,
    currentGameModeId,
    setCurrentGameModeId,
    handleCardClick,
    initializeGame,
    goToNextLevel,
    isChecking,
    remainingTime,
    gameActuallyStarted,
    showNameInputDialog,
    setShowNameInputDialog,
    lastGameScore,
    lastGameModeForScore,
    submitHighScore: triggerHookSubmitHighScore,
    returnToMainMenu: hookReturnToMainMenu,
    continueGameFromSave,
    explicitlySaveCurrentGame,
    resetUltimateChampionStatusInHook,
  } = useGameLogic(initialGameStartPending);

  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [playerName, setPlayerName] = useState('');
  const [allGroupedHighScores, setAllGroupedHighScores] = useState<GroupedHighScore[]>([]);
  const [hasSavedGame, setHasSavedGame] = useState(false);
  const [isLoadingSavedGame, setIsLoadingSavedGame] = useState(true);


  const [showHowToPlayDialog, setShowHowToPlayDialog] = useState(false);
  const [showAboutDialog, setShowAboutDialog] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showHighScoresDialog, setShowHighScoresDialog] = useState(false);

  const [showClearScoresDialog, setShowClearScoresDialog] = useState(false);
  const [scoreGroupToClear, setScoreGroupToClear] = useState<{ difficultyId: DifficultyId, gameModeId: GameModeId } | null>(null);
  const [showClearAllScoresDialog, setShowClearAllScoresDialog] = useState(false);

  const checkSavedGame = useCallback(() => {
    setIsLoadingSavedGame(true);
    const savedGame = loadPersistedGameState();
    setHasSavedGame(!!savedGame);
    setIsLoadingSavedGame(false);
  }, []);

  useEffect(() => {
    checkSavedGame();
  }, [checkSavedGame, gameActuallyStarted, gameWon, gameOverReason]);


  const handlePlayAgain = () => {
    initializeGame(true);
    setHasSavedGame(false);
  };

  const handleNextLevel = () => {
    goToNextLevel();
    setHasSavedGame(false);
  };

  const handleMainStartGameClick = () => {
    ensureAudioUnlocked();
    initializeGame(true);
    setHasSavedGame(false);
  };

  const handleContinueLastGameClick = () => {
    const savedGame = loadPersistedGameState();
    if (savedGame) {
      ensureAudioUnlocked();
      continueGameFromSave(savedGame);
    }
  };

  const handleSaveGameClick = () => {
    explicitlySaveCurrentGame();
    setHasSavedGame(true);
    toast({ title: t('gameSavedToastTitle') });
  };

  const returnToMainMenuAndClearSaved = () => {
    hookReturnToMainMenu();
    setHasSavedGame(loadPersistedGameState() !== null);
  };


  const getGameOverMessage = () => {
    if (gameOverReason === 'time') {
      return { title: t('gameOverTimeUp'), Icon: Hourglass };
    }
    if (gameOverReason === 'moves') {
      return { title: t('gameOverOutOfMoves'), Icon: Swords };
    }
    return null;
  };

  const gameOverInfo = getGameOverMessage();

  const handleActualHighScoreSubmission = () => {
    triggerHookSubmitHighScore(playerName);
    setShowNameInputDialog(false);

    const currentLevelCompletedMessage = currentLevel.moveLimit && lastGameScore !== null ? t('youGotMovesScore', { score: lastGameScore }) : (currentLevel.timeLimit && lastGameScore !== null ? t('youGotTimeScore', {score: lastGameScore}) : t('levelComplete'));

    if (gameWon && currentGameModeId === 'levels' && allLevelsBeaten && ultimateChampionInfo.achieved && ultimateChampionInfo.playerName) {
        toast({
            title: t('ultimateChampionMessage', {playerName: ultimateChampionInfo.playerName }),
            description: currentLevelCompletedMessage,
        });
    } else if (allLevelsBeaten && currentGameModeId === 'levels') {
          toast({
            title: t('allLevelsCompleted'),
            description: currentLevelCompletedMessage,
        });
    } else if (gameWon) {
          toast({
            title: t('levelComplete'),
            description: currentLevelCompletedMessage,
        });
    }
    setPlayerName('');
  };

  const handleCancelHighScoreSubmission = () => {
      triggerHookSubmitHighScore('');
      setShowNameInputDialog(false);
      setPlayerName('');

      const currentLevelCompletedMessage = currentLevel.moveLimit && lastGameScore !== null ? t('youGotMovesScore', { score: lastGameScore }) : (currentLevel.timeLimit && lastGameScore !== null ? t('youGotTimeScore', {score: lastGameScore}) : t('levelComplete'));

      if (gameWon && currentGameModeId === 'levels' && allLevelsBeaten && ultimateChampionInfo.achieved && ultimateChampionInfo.playerName) {
            toast({
                title: t('ultimateChampionMessage', {playerName: ultimateChampionInfo.playerName}),
                description: currentLevelCompletedMessage,
            });
      } else if (allLevelsBeaten && currentGameModeId === 'levels') {
            toast({
                title: t('allLevelsCompleted'),
                description: currentLevelCompletedMessage,
            });
      } else if (gameWon) {
            toast({
                title: t('levelComplete'),
                description: currentLevelCompletedMessage,
            });
      }
  };

  const fetchAndShowAllHighScores = () => {
    setAllGroupedHighScores(getAllHighScoresGrouped());
    setShowHighScoresDialog(true);
  };

  const handleClearCurrentScores = (difficultyId: DifficultyId, gameModeId: GameModeId) => {
    setScoreGroupToClear({ difficultyId, gameModeId });
    setShowClearScoresDialog(true);
  };

  const HighScoreTableDisplay = ({ difficulty, gameMode, scores }: { difficulty: Level, gameMode: typeof GAME_MODES[number], scores: HighScoreEntry[] }) => {
    if (scores.length === 0) {
      return <p className="text-center text-muted-foreground py-2">{t('noScoresYet')}</p>;
    }
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">{t('rankHeader')}</TableHead>
            <TableHead>{t('nameHeader')}</TableHead>
            <TableHead className="text-right">{difficulty.timeLimit ? t('scoreHeaderTime') : t('scoreHeaderMoves')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scores.map((entry, index) => (
            <TableRow key={entry.id}>
              <TableCell className="font-medium text-center">{index + 1}</TableCell>
              <TableCell>{entry.playerName}</TableCell>
              <TableCell className="text-right">{entry.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const handleConfirmClearSpecificScores = () => {
    if (scoreGroupToClear) {
      clearHighScoresFromStorage(scoreGroupToClear.difficultyId, scoreGroupToClear.gameModeId);
      if (showHighScoresDialog) {
        setAllGroupedHighScores(getAllHighScoresGrouped());
      }
      toast({ title: t('highScoresCleared') });
      setScoreGroupToClear(null);
    }
    setShowClearScoresDialog(false);
  };

  const handleClearAllScoresGlobally = () => {
    clearAllHighScoresFromStorageGlobally();
    resetUltimateChampionStatusInHook();
    if (showHighScoresDialog) {
      setAllGroupedHighScores(getAllHighScoresGrouped());
    }
    toast({ title: t('allHighScoresCleared') });
    setShowClearAllScoresDialog(false);
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Menubar className="rounded-none border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full">
        <MenubarMenu>
          <MenubarTrigger className="gap-1"><Gamepad2 className="h-4 w-4"/>{t('menuMain')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={handleMainStartGameClick}
              disabled={gameActuallyStarted}
            >
              <Play className="mr-2 h-4 w-4" /> {t('menuStartGame')}
            </MenubarItem>
            <MenubarItem onClick={handleSaveGameClick} disabled={!gameActuallyStarted || gameWon || !!gameOverReason}>
              <Save className="mr-2 h-4 w-4" /> {t('menuSaveGame')}
            </MenubarItem>
            <MenubarItem onClick={handleContinueLastGameClick} disabled={!hasSavedGame || gameActuallyStarted}>
              <RotateCcw className="mr-2 h-4 w-4" /> {t('continueLastGame')}
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={fetchAndShowAllHighScores}>
               <Crown className="mr-2 h-4 w-4" /> {t('menuHighScores')}
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={returnToMainMenuAndClearSaved} disabled={!gameActuallyStarted && !hasSavedGame && isLoadingSavedGame}>
              <Home className="mr-2 h-4 w-4" /> {t('menuBackToMain')}
            </MenubarItem>
            {/* Exit button removed */}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="gap-1"><Settings2 className="h-4 w-4" />{t('menuEdit')}</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger><Palette className="mr-2 h-4 w-4" />{t('menuThemes')}</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarRadioGroup value={theme} onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}>
                  <MenubarRadioItem value="light"><Sun className="mr-2 h-4 w-4" />{t('themeLight')}</MenubarRadioItem>
                  <MenubarRadioItem value="dark"><Moon className="mr-2 h-4 w-4" />{t('themeDark')}</MenubarRadioItem>
                  <MenubarRadioItem value="system"><Laptop className="mr-2 h-4 w-4" />{t('themeSystem')}</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
               <MenubarSubTrigger><MessageCircle className="mr-2 h-4 w-4" />{t('selectLanguage')}</MenubarSubTrigger>
               <MenubarSubContent>
                <MenubarRadioGroup value={language} onValueChange={(value) => setLanguage(value as SupportedLanguage)}>
                  {languages.map(lang => (
                    <MenubarRadioItem key={lang.code} value={lang.code}>{lang.name}</MenubarRadioItem>
                  ))}
                </MenubarRadioGroup>
               </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarCheckboxItem checked={sfxEnabled} onCheckedChange={toggleSfx}>
              <Volume2 className="mr-2 h-4 w-4" />{t('sfx')}
            </MenubarCheckboxItem>
            <div className="px-2 py-1.5">
              <VolumeSlider label={t('sfxVolume')} value={sfxVolume} onValueChange={setSfxVolume} />
            </div>
            <MenubarCheckboxItem checked={bgmEnabled} onCheckedChange={toggleBgm}>
               <Music className="mr-2 h-4 w-4" />{t('bgm')}
            </MenubarCheckboxItem>
             <div className="px-2 py-1.5">
              <VolumeSlider label={t('bgmVolume')} value={bgmVolume} onValueChange={setBgmVolume} />
            </div>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="gap-1"><HelpCircleIcon className="h-4 w-4"/>{t('menuHelp')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setShowHowToPlayDialog(true)}>
              <BookOpen className="mr-2 h-4 w-4" /> {t('menuHowToPlay')}
            </MenubarItem>
            <MenubarItem onClick={() => setShowAboutDialog(true)}>
              <Info className="mr-2 h-4 w-4" /> {t('menuAbout')}
            </MenubarItem>
            <MenubarItem onClick={() => setShowPrivacyDialog(true)}>
              <ShieldCheck className="mr-2 h-4 w-4" /> {t('menuPrivacyPolicy')}
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Header
        currentDifficultyId={currentDifficultyId}
        onDifficultyChange={setCurrentDifficultyId}
        currentThemeId={currentThemeId}
        onThemeChange={setCurrentThemeId}
        currentGameModeId={currentGameModeId}
        onGameModeChange={setCurrentGameModeId}
        onNewGame={() => { initializeGame(true); setHasSavedGame(false); }}
      />

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-60 lg:w-72 flex-shrink-0 order-2 md:order-1">
          <GameStats
            moves={moves}
            matchedPairs={matchedPairs}
            currentLevel={currentLevel}
            gameMode={currentGameModeId}
            remainingTime={remainingTime}
          />
        </div>

        <div className="flex-grow w-full flex flex-col items-center order-1 md:order-2 relative">
          {gameActuallyStarted && (currentGameModeId === 'levels' || currentGameModeId === 'classic') && !gameWon && !gameOverReason && (
              <p className="text-center font-semibold text-lg mb-2 text-primary">
                {t('currentLevelDisplay', { levelName: t(currentLevel.nameKey as any) || currentLevel.displayName })}
              </p>
          )}

          {gameOverInfo && (
            <div className="my-6 p-6 bg-destructive/20 rounded-lg shadow-xl text-center flex flex-col items-center w-full max-w-md">
              <gameOverInfo.Icon className="w-16 h-16 text-destructive mb-4" />
              <h2 className="text-3xl font-bold text-destructive-foreground mb-2">
                {gameOverInfo.title}
              </h2>
              <Button onClick={handlePlayAgain} size="lg" className="shadow-lg mt-4">
                {t('playAgain')}
              </Button>
              {currentGameModeId === 'levels' && (
                <Button
                  onClick={fetchAndShowAllHighScores}
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  <Crown className="mr-2 h-4 w-4" /> {t('menuHighScores')}
                </Button>
              )}
            </div>
          )}

          {gameWon && !gameOverReason && !showNameInputDialog && (
            <div className="my-6 p-6 bg-accent/20 rounded-lg shadow-xl text-center flex flex-col items-center w-full max-w-md">
              {allLevelsBeaten && currentGameModeId === 'levels' && ultimateChampionInfo.achieved && ultimateChampionInfo.playerName ? (
                    <>
                    <Trophy className="w-16 h-16 text-yellow-400 mb-4" />
                    <h2 className="text-3xl font-bold text-accent-foreground mb-2">
                      {t('ultimateChampionMessage', {playerName: ultimateChampionInfo.playerName })}
                    </h2>
                  </>
                ) : (
                  <>
                    <PartyPopper className="w-16 h-16 text-accent mb-4" />
                    <h2 className="text-3xl font-bold text-accent-foreground mb-2">
                      {allLevelsBeaten && currentGameModeId === 'levels' ? t('allLevelsCompleted') : t('levelComplete')}
                    </h2>
                    <p className="text-lg text-accent-foreground mb-4">
                      {!(allLevelsBeaten && currentGameModeId === 'levels') && currentGameModeId === 'levels' && currentLevel.moveLimit && lastGameScore !== null
                        ? t('youWonInMoves', { moves: lastGameScore })
                        : !(allLevelsBeaten && currentGameModeId === 'levels') && currentGameModeId === 'levels' && currentLevel.timeLimit && lastGameScore !== null
                            ? t('youGotTimeScore', { score: lastGameScore })
                            : ''
                      }
                    </p>
                  </>
                )}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button onClick={handlePlayAgain} size="lg" variant="outline" className="shadow-lg">
                  {t('playAgain')}
                </Button>
                {!(allLevelsBeaten && currentGameModeId === 'levels' && ultimateChampionInfo.achieved && ultimateChampionInfo.playerName) && !allLevelsBeaten && (
                  <Button onClick={handleNextLevel} size="lg" className="shadow-lg">
                    {t('nextLevel')}
                  </Button>
                )}
              </div>
                {currentGameModeId === 'levels' && (
                <Button
                  onClick={fetchAndShowAllHighScores}
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  <Crown className="mr-2 h-4 w-4" /> {t('menuHighScores')}
                </Button>
              )}
            </div>
          )}


          {showNameInputDialog && lastGameScore !== null && lastGameModeForScore === 'levels' && (
              <AlertDialog open={showNameInputDialog} onOpenChange={(open) => {
                  if (!open) {
                      handleCancelHighScoreSubmission();
                  }
              }}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{t('newHighScoreTitle')}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {t('congratulations')}{' '}
                      {currentLevel.timeLimit
                        ? t('youGotTimeScore', { score: lastGameScore })
                        : t('youGotMovesScore', { score: lastGameScore })}
                      <br />
                      {t('enterYourName')}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="py-4">
                    <Label htmlFor="playerName" className="sr-only">{t('playerNameLabel')}</Label>
                    <Input
                      id="playerName"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      placeholder={t('playerNamePlaceholder')}
                      maxLength={20}
                      autoFocus
                      onKeyDown={(e) => { if (e.key === 'Enter' && playerName.trim()) { handleActualHighScoreSubmission();}}}
                    />
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancelHighScoreSubmission}>
                      {t('cancelButton')}
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleActualHighScoreSubmission} disabled={!playerName.trim()}>
                      {t('submitButton')}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
          )}

          {!gameActuallyStarted && !gameWon && !gameOverReason && !isLoadingSavedGame && (
            <div className="flex flex-col items-center justify-center text-center p-8 w-full min-h-[calc(100vh-400px)]">
              <PlayCircle className="w-24 h-24 text-primary mb-6" />
              <p className="text-xl text-muted-foreground mb-4">
                {t('pressStartGame')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleMainStartGameClick} size="lg" variant="default" className="shadow-xl px-8 py-6 text-lg">
                  <Play className="mr-2 h-5 w-5" /> {t('startGame')}
                </Button>
                <Button
                  onClick={handleContinueLastGameClick}
                  size="lg"
                  variant={(hasSavedGame && !isLoadingSavedGame && !gameActuallyStarted) ? "default" : "secondary"}
                  className="shadow-xl px-8 py-6 text-lg"
                  disabled={!hasSavedGame || isLoadingSavedGame || gameActuallyStarted}
                >
                  <Save className="mr-2 h-5 w-5" /> {t('continueLastGame')}
                </Button>
              </div>
            </div>
          )}
          {isLoadingSavedGame && !gameActuallyStarted && (
              <div className="flex flex-col items-center justify-center text-center p-8 w-full min-h-[calc(100vh-400px)]">
                <Hourglass className="w-16 h-16 text-primary mb-4 animate-spin" />
                <p className="text-lg text-muted-foreground">{t('loadingText')}</p>
              </div>
          )}


          {gameActuallyStarted && !gameWon && !gameOverReason && cards.length > 0 && (
            <GameBoard
              cards={cards}
              level={currentLevel}
              onCardClick={handleCardClick}
              isChecking={isChecking}
            />
          )}
        </div>
      </main>

      <AlertDialog open={showHowToPlayDialog} onOpenChange={setShowHowToPlayDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('menuHowToPlay')}</AlertDialogTitle>
            <AlertDialogDescription className="text-left whitespace-pre-wrap">
              {t('howToPlayContent')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>{t('okButton')}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showAboutDialog} onOpenChange={setShowAboutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('menuAbout')}</AlertDialogTitle>
            <AlertDialogDescription className="text-left whitespace-pre-wrap">
              {t('aboutContentLine1')}{"\n"}
              {t('aboutContentLine2')}{"\n"}
              {t('aboutContentLine3')}{"\n\n"}
              {t('aboutContentLine4')}{" "}
              <a href="mailto:helio.gnr@gmail.com" className="text-primary hover:underline">helio.gnr@gmail.com</a>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>{t('okButton')}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showPrivacyDialog} onOpenChange={setShowPrivacyDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('menuPrivacyPolicy')}</AlertDialogTitle>
            <AlertDialogDescription className="text-left whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
              {t('privacyPolicyContentP1')}{"\n\n"}
              {t('privacyPolicyContentP2')}{"\n\n"}
              {t('privacyPolicyContentP3')}{"\n\n"}
              {t('privacyPolicyContentP4')}{"\n\n"}
              {t('privacyPolicyContentP5')}{"\n\n"}
              {t('privacyPolicyContentP6')}{" "}
              <a href="mailto:helio.gnr@gmail.com" className="text-primary hover:underline">helio.gnr@gmail.com</a>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>{t('okButton')}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showHighScoresDialog} onOpenChange={setShowHighScoresDialog}>
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogHeader>
            <div className="flex justify-between items-start">
              <div>
                <AlertDialogTitle>{t('menuHighScores')}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t('highScoresDescription')}
                </AlertDialogDescription>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (currentGameModeId !== 'classic') {
                        handleClearCurrentScores(currentDifficultyId, currentGameModeId);
                      } else {
                        toast({ title: t('highScoresOnlyForLevelsMode'), variant: 'destructive' });
                      }
                    }}
                    disabled={currentGameModeId === 'classic'}
                    className="gap-1.5"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> {t('menuClearHighScores')}
                  </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowClearAllScoresDialog(true)}
                  className="gap-1.5"
                >
                  <Trash2 className="h-3.5 w-3.5" /> {t('menuClearAllHighScoresGlobal')}
                </Button>
              </div>
            </div>
          </AlertDialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-6">
               {ultimateChampionInfo.achieved && ultimateChampionInfo.playerName && (
                    <Card className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-yellow-900 shadow-xl mb-4">
                      <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2 pt-3 px-3">
                        <Trophy className="h-6 w-6 mr-2 text-yellow-700" />
                        <CardTitle className="text-xl font-bold text-center">{t('ultimateChampionMessage', {playerName: ultimateChampionInfo.playerName})}</CardTitle>
                      </CardHeader>
                    </Card>
                  )}
                {allGroupedHighScores.length > 0 ? allGroupedHighScores.map(group => (
                  <Card key={`${group.difficulty.id}-${group.gameMode.id}`} className="bg-card/80 backdrop-blur-sm shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-xl">
                         {t(group.difficulty.nameKey as any)} ({t(group.gameMode.nameKey as any)})
                      </CardTitle>
                      {group.gameMode.id === 'levels' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-destructive"
                          onClick={() => handleClearCurrentScores(group.difficulty.id, group.gameMode.id)}
                          aria-label={t('menuClearHighScores')}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent>
                      <HighScoreTableDisplay
                        difficulty={group.difficulty}
                        gameMode={group.gameMode}
                        scores={group.scores}
                      />
                    </CardContent>
                  </Card>
                )) : <p className="text-center text-muted-foreground py-4">{t('noScoresYet')}</p>}
              </div>
          </ScrollArea>
          <AlertDialogFooter>
            <AlertDialogAction>{t('okButton')}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showClearScoresDialog} onOpenChange={(open) => {
          if (!open) setScoreGroupToClear(null);
          setShowClearScoresDialog(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('clearHighScoresConfirmationTitle')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('clearHighScoresConfirmationMessage')}
              {scoreGroupToClear && ` (${t(LEVELS.find(l => l.id === scoreGroupToClear.difficultyId)?.nameKey as any) || ''} - ${t(GAME_MODES.find(m => m.id === scoreGroupToClear.gameModeId)?.nameKey as any) || ''})`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => { setShowClearScoresDialog(false); setScoreGroupToClear(null); }}>{t('cancelButton')}</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmClearSpecificScores}>
              {t('confirmClearButton')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showClearAllScoresDialog} onOpenChange={setShowClearAllScoresDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('clearAllHighScoresConfirmationTitle')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('clearAllHighScoresConfirmationMessage')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowClearAllScoresDialog(false)}>{t('cancelButton')}</AlertDialogCancel>
            <AlertDialogAction onClick={handleClearAllScoresGlobally}>
              {t('confirmClearButton')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <footer className="text-center p-4 text-sm text-muted-foreground border-t border-border/50">
        Pair Genius by Hélio Vieira - All Rights Reserved
      </footer>
    </div>
  );
};
