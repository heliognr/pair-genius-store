
"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import type { CardData, DifficultyId, ThemeId, GameModeId, SavedGameState, Level, UltimateChampionInfo } from '@/types';
import { LEVELS, DEFAULT_DIFFICULTY_ID } from '@/lib/levels';
import { THEMES, DEFAULT_THEME_ID } from '@/lib/themes';
import { GAME_MODES, DEFAULT_GAME_MODE_ID } from '@/lib/modes';
import { useSound } from '@/contexts/SoundContext';
import { isHighScore, addHighScore as addHighScoreToStorage, ULTIMATE_CHAMPION_KEY } from '@/lib/highscore';
import { saveGameState as persistGameState, loadGameState as loadPersistedGameState, clearSavedGameState as clearPersistedGameState, reconstructCards } from '@/lib/savegame';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const useGameLogic = (initialGameStartPending: boolean) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCardIds, setFlippedCardIds] = useState<string[]>([]);
  const [matchedCardValues, setMatchedCardValues] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [allLevelsBeaten, setAllLevelsBeaten] = useState(false);
  const [ultimateChampionInfo, setUltimateChampionInfo] = useState<UltimateChampionInfo>({ achieved: false, playerName: null });
  const [gameOverReason, setGameOverReason] = useState<'time' | 'moves' | null>(null);
  const [gameActuallyStarted, setGameActuallyStarted] = useState(!initialGameStartPending);

  const [currentDifficultyId, setCurrentDifficultyId] = useState<DifficultyId>(DEFAULT_DIFFICULTY_ID);
  const [currentThemeId, setCurrentThemeId] = useState<ThemeId>(DEFAULT_THEME_ID);
  const [currentGameModeId, setCurrentGameModeId] = useState<GameModeId>(DEFAULT_GAME_MODE_ID);

  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [showNameInputDialog, setShowNameInputDialog] = useState(false);
  const [lastGameScore, setLastGameScore] = useState<number | null>(null);
  const [lastGameModeForScore, setLastGameModeForScore] = useState<GameModeId | null>(null);

  const { playSfx, playBgmForLevel, stopBgm, ensureAudioUnlocked } = useSound();

  const currentLevel = LEVELS.find(l => l.id === currentDifficultyId) || LEVELS[0];
  const currentTheme = THEMES.find(th => th.id === currentThemeId) || THEMES[0];

  const justLoadedFromSaveRef = useRef(false);
  const prevDifficultyRef = useRef(currentDifficultyId);
  const prevThemeRef = useRef(currentThemeId);
  const prevModeRef = useRef(currentGameModeId);
  const firstSettingsChangeEffectRun = useRef(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedInfoRaw = localStorage.getItem(ULTIMATE_CHAMPION_KEY);
      if (storedInfoRaw) {
        try {
          const parsedInfo = JSON.parse(storedInfoRaw) as UltimateChampionInfo;
           if (parsedInfo && typeof parsedInfo.achieved === 'boolean') {
            if (parsedInfo.achieved && parsedInfo.playerName && parsedInfo.playerName.trim() !== '') {
                setUltimateChampionInfo(parsedInfo);
            } else {
                // If achieved is true but playerName is invalid, or achieved is false
                setUltimateChampionInfo({ achieved: false, playerName: null });
                if (parsedInfo.achieved) { // Clean up inconsistent state
                    localStorage.removeItem(ULTIMATE_CHAMPION_KEY);
                }
            }
          }
        } catch (e) {
          console.error("Failed to parse ultimate champion info from localStorage", e);
          localStorage.removeItem(ULTIMATE_CHAMPION_KEY);
          setUltimateChampionInfo({ achieved: false, playerName: null });
        }
      }
    }
  }, []);

  const resetUltimateChampionStatusInHook = useCallback(() => {
    setUltimateChampionInfo({ achieved: false, playerName: null });
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ULTIMATE_CHAMPION_KEY);
    }
  }, []);


  const clearTimer = useCallback(() => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
    setIsTimerActive(false);
  }, []);

  const setupNewLevel = useCallback((isGameBeingStartedOrRestarted: boolean) => {
    setGameWon(false);
    setMoves(0);
    setFlippedCardIds([]);
    setMatchedCardValues([]);
    setIsChecking(false);
    setShowNameInputDialog(false);
    setGameOverReason(null); 

    const selectedLevel = LEVELS.find(l => l.id === currentDifficultyId) || LEVELS[0];
    const selectedTheme = THEMES.find(t => t.id === currentThemeId) || THEMES[0];

    if (isGameBeingStartedOrRestarted) {
      console.log("useGameLogic: Calling playBgmForLevel from setupNewLevel for level:", selectedLevel.id);
      playBgmForLevel(selectedLevel.id);
    } else {
      console.log("useGameLogic: Not starting BGM from setupNewLevel (isGameBeingStartedOrRestarted is false).");
      stopBgm();
    }

    const iconsForLevel = selectedTheme.icons.slice(0, selectedLevel.totalPairs);
    if (iconsForLevel.length < selectedLevel.totalPairs) {
      console.error("Not enough icons in theme for this difficulty level.");
      setCards([]); 
      return;
    }

    let gameCards: CardData[] = [];
    iconsForLevel.forEach((Icon, index) => {
      const cardValue = `${selectedTheme.id}-icon${index}`;
      gameCards.push({ id: `${cardValue}-1`, value: cardValue, iconComponent: Icon, isFlipped: false, isMatched: false });
      gameCards.push({ id: `${cardValue}-2`, value: cardValue, iconComponent: Icon, isFlipped: false, isMatched: false });
    });

    setCards(shuffleArray(gameCards));
    clearTimer();

    if (currentGameModeId === 'levels' && selectedLevel.timeLimit) {
      setRemainingTime(selectedLevel.timeLimit);
      setIsTimerActive(false); 
    } else {
      setRemainingTime(null);
      setIsTimerActive(false);
    }
  }, [currentDifficultyId, currentThemeId, currentGameModeId, playBgmForLevel, stopBgm, clearTimer]);


  const initializeGame = useCallback((shouldActuallyStart: boolean = true) => {
    console.log("useGameLogic: initializeGame called. shouldActuallyStart:", shouldActuallyStart)
    
    if (shouldActuallyStart) {
      ensureAudioUnlocked();
      setGameActuallyStarted(true);
      clearPersistedGameState(); 
      setAllLevelsBeaten(false); 
      setGameOverReason(null); 
      setupNewLevel(true); 
    } else {
      setGameActuallyStarted(false);
      setCards([]);
      stopBgm();
      clearTimer();
      setIsTimerActive(false);
      setAllLevelsBeaten(false);
      setGameOverReason(null);
    }
  }, [ensureAudioUnlocked, setupNewLevel, stopBgm, clearTimer]);


  const continueGameFromSave = useCallback((savedState: SavedGameState) => {
    justLoadedFromSaveRef.current = true;
    ensureAudioUnlocked();

    setCurrentDifficultyId(savedState.currentDifficultyId);
    setCurrentThemeId(savedState.currentThemeId);
    setCurrentGameModeId(savedState.currentGameModeId);

    const reconstructed = reconstructCards(savedState.cards, savedState.currentThemeId);
    setCards(reconstructed);

    setFlippedCardIds(savedState.flippedCardIds);
    setMatchedCardValues(savedState.matchedCardValues);
    setMoves(savedState.moves);
    setGameWon(savedState.gameWon);
    setAllLevelsBeaten(savedState.allLevelsBeaten);
    setUltimateChampionInfo(savedState.ultimateChampionInfo || { achieved: false, playerName: null });
    setGameOverReason(savedState.gameOverReason);
    setRemainingTime(savedState.remainingTime);

    setGameActuallyStarted(true);
    setIsTimerActive(!!(savedState.isTimerActive && !savedState.gameWon && !savedState.gameOverReason));

    if (!savedState.gameWon && !savedState.gameOverReason) {
      const loadedLevel = LEVELS.find(l => l.id === savedState.currentDifficultyId) || LEVELS[0];
      playBgmForLevel(loadedLevel.id);
    }
   
    prevDifficultyRef.current = savedState.currentDifficultyId;
    prevThemeRef.current = savedState.currentThemeId;
    prevModeRef.current = savedState.currentGameModeId;
  }, [ensureAudioUnlocked, playBgmForLevel]);


  useEffect(() => {
    const settingsActuallyChanged = currentDifficultyId !== prevDifficultyRef.current ||
      currentThemeId !== prevThemeRef.current ||
      currentGameModeId !== prevModeRef.current;

    if (justLoadedFromSaveRef.current) {
      justLoadedFromSaveRef.current = false; 
    } else if (firstSettingsChangeEffectRun.current) {
      firstSettingsChangeEffectRun.current = false;
      if (!initialGameStartPending) {
        initializeGame(true);
      } else {
        initializeGame(false); 
      }
    } else if (gameActuallyStarted && settingsActuallyChanged) {
      initializeGame(true); 
    }

    prevDifficultyRef.current = currentDifficultyId;
    prevThemeRef.current = currentThemeId;
    prevModeRef.current = currentGameModeId;

  }, [currentDifficultyId, currentThemeId, currentGameModeId, gameActuallyStarted, initialGameStartPending, initializeGame]);


  useEffect(() => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }

    if (gameActuallyStarted && currentGameModeId === 'levels' && isTimerActive && !gameWon && !gameOverReason && currentLevel.timeLimit && remainingTime !== null && remainingTime > 0) {
      timerIdRef.current = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime === null) { 
            if (timerIdRef.current) clearInterval(timerIdRef.current); timerIdRef.current = null; return null;
          }
          if (prevTime <= 1) {
            if (timerIdRef.current) clearInterval(timerIdRef.current);
            timerIdRef.current = null;
            setGameOverReason('time');
            setIsTimerActive(false);
            playSfx('lose');
            stopBgm();
            clearPersistedGameState();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
    };
  }, [gameActuallyStarted, currentGameModeId, isTimerActive, remainingTime, gameWon, gameOverReason, playSfx, stopBgm, clearTimer, currentLevel, clearPersistedGameState]);

  const handleCardClick = useCallback((cardId: string) => {
    if (isChecking || gameWon || gameOverReason || !gameActuallyStarted) return;

    const clickedCard = cards.find(c => c.id === cardId);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    playSfx('flip');

    if (currentGameModeId === 'levels' && !isTimerActive && gameActuallyStarted && currentLevel.timeLimit && remainingTime !== null && remainingTime > 0 && !gameWon && !gameOverReason) {
      setIsTimerActive(true);
    }

    const newCards = cards.map(c =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCardIds = [...flippedCardIds, cardId];
    setFlippedCardIds(newFlippedCardIds);

    if (newFlippedCardIds.length === 2) {
      setIsChecking(true);
      const currentMoves = moves + 1;
      setMoves(currentMoves);
      const card1 = newCards.find(c => c.id === newFlippedCardIds[0]);
      const card2 = newCards.find(c => c.id === newFlippedCardIds[1]);

      let isGameWonOnThisTurn = false;
      let currentTurnMatchedValues = matchedCardValues;

      if (card1 && card2 && card1.value === card2.value) { // MATCH
        playSfx('match');
        currentTurnMatchedValues = [...matchedCardValues, card1.value];
        setMatchedCardValues(currentTurnMatchedValues);
        setCards(prevCards => prevCards.map(c =>
          c.value === card1.value ? { ...c, isMatched: true, isFlipped: true } : c
        ));
        setFlippedCardIds([]);
        setIsChecking(false);

        if (currentTurnMatchedValues.length === currentLevel.totalPairs) {
          isGameWonOnThisTurn = true;
          setGameWon(true);
          playSfx('win');
          stopBgm();
          clearTimer();
          clearPersistedGameState();
          
          let isNowAllLevelsBeaten = false;
          // Definitive check for all levels beaten - ONLY for the actual last level in 'levels' mode
          if (currentDifficultyId === LEVELS[LEVELS.length - 1].id && currentGameModeId === 'levels') {
            setAllLevelsBeaten(true);
            isNowAllLevelsBeaten = true; 
          }

          if (currentGameModeId === 'levels') {
            let finalScore: number | null = null;
            if (currentLevel.timeLimit && remainingTime !== null) {
              finalScore = currentLevel.timeLimit - remainingTime;
            } else if (currentLevel.moveLimit) {
              finalScore = currentMoves;
            }

            if (finalScore !== null) {
              setLastGameScore(finalScore);
              setLastGameModeForScore(currentGameModeId);
              // Show name input dialog if it's a high score for the level OR if all levels are now beaten
              if (isHighScore(currentDifficultyId, currentGameModeId, finalScore) || isNowAllLevelsBeaten) {
                setShowNameInputDialog(true);
              }
            }
          }
        }
      } else { // MISMATCH
        playSfx('flip'); 
        setFlippedCardIds([]); // Clear for next pair attempt immediately

        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              newFlippedCardIds.includes(c.id) ? { ...c, isFlipped: false } : c
            )
          );
          setIsChecking(false); // Allow clicks after cards are hidden
        }, 1300);
      }

      if (!isGameWonOnThisTurn && currentGameModeId === 'levels' && currentLevel.moveLimit && currentMoves >= currentLevel.moveLimit && currentTurnMatchedValues.length < currentLevel.totalPairs) {
        setGameOverReason('moves');
        setIsTimerActive(false); 
        playSfx('lose');
        stopBgm();
        clearPersistedGameState();
      }
    }
  }, [
    cards, flippedCardIds, matchedCardValues, moves, isChecking, gameWon, gameOverReason, gameActuallyStarted,
    playSfx, stopBgm, clearTimer, currentLevel, currentGameModeId, isTimerActive, remainingTime,
    currentDifficultyId, // Added
  ]);


  const goToNextLevel = useCallback(() => {
    const currentLevelIndex = LEVELS.findIndex(l => l.id === currentDifficultyId);
    if (currentLevelIndex < LEVELS.length - 1) {
      const nextDifficultyId = LEVELS[currentLevelIndex + 1].id;
      setCurrentDifficultyId(nextDifficultyId);
    } else {
      setAllLevelsBeaten(true);
    }
    initializeGame(true); 
  }, [currentDifficultyId, initializeGame]);

  const submitHighScore = useCallback((playerName: string) => {
    const trimmedPlayerName = playerName.trim();
    
    if (lastGameScore !== null && currentDifficultyId && lastGameModeForScore === 'levels') {
        const nameForLevelScore = trimmedPlayerName || "Champion"; 
        addHighScoreToStorage(currentDifficultyId, 'levels', nameForLevelScore, lastGameScore);
        
        // Set ultimate champion info ONLY if allLevelsBeaten is true (final level) AND a non-empty name was provided.
        if (allLevelsBeaten && currentDifficultyId === LEVELS[LEVELS.length - 1].id && currentGameModeId === 'levels') {
          if (trimmedPlayerName) { 
            const newChampionInfo: UltimateChampionInfo = { achieved: true, playerName: trimmedPlayerName };
            setUltimateChampionInfo(newChampionInfo);
            if (typeof window !== 'undefined') {
                localStorage.setItem(ULTIMATE_CHAMPION_KEY, JSON.stringify(newChampionInfo));
            }
          }
          // If trimmedPlayerName is empty here, ultimateChampionInfo is NOT set to achieved:true.
        }
    }
    setLastGameScore(null); 
    setLastGameModeForScore(null);
  }, [lastGameScore, currentDifficultyId, lastGameModeForScore, allLevelsBeaten, setUltimateChampionInfo, currentGameModeId]);


  const returnToMainMenu = useCallback(() => {
    setGameActuallyStarted(false);
    setCards([]);
    setMoves(0);
    setFlippedCardIds([]);
    setMatchedCardValues([]);
    setGameWon(false);
    setGameOverReason(null);
    clearTimer();
    stopBgm();
    setShowNameInputDialog(false);
    setIsTimerActive(false);
    setLastGameScore(null);
    setLastGameModeForScore(null);
    // Do NOT reset allLevelsBeaten or ultimateChampionInfo here, as they are persistent achievements
    // setAllLevelsBeaten(false); 
  }, [clearTimer, stopBgm]);

  const explicitlySaveCurrentGame = useCallback(() => {
    if (gameActuallyStarted && !gameWon && !gameOverReason && cards.length > 0) {
      const stateToSave: SavedGameState = {
        cards: cards.map(c => ({ id: c.id, value: c.value, isFlipped: c.isFlipped, isMatched: c.isMatched })),
        flippedCardIds,
        matchedCardValues,
        moves,
        gameWon,
        allLevelsBeaten,
        ultimateChampionInfo, 
        gameOverReason,
        currentDifficultyId,
        currentThemeId,
        currentGameModeId,
        remainingTime,
        isTimerActive,
        timestamp: Date.now(),
      };
      persistGameState(stateToSave);
    }
  }, [
    cards, flippedCardIds, matchedCardValues, moves, gameWon, allLevelsBeaten, ultimateChampionInfo,
    gameOverReason, currentDifficultyId, currentThemeId, currentGameModeId,
    remainingTime, isTimerActive, gameActuallyStarted
  ]);

  return {
    cards,
    moves,
    matchedPairs: matchedCardValues.length,
    gameWon,
    allLevelsBeaten,
    ultimateChampionInfo,
    gameOverReason,
    currentLevel,
    currentTheme,
    currentDifficultyId,
    setCurrentDifficultyId,
    currentThemeId,
    setCurrentThemeId,
    currentGameModeId,
    setCurrentGameModeId,
    remainingTime,
    handleCardClick,
    initializeGame,
    goToNextLevel,
    isChecking,
    gameActuallyStarted,
    showNameInputDialog,
    setShowNameInputDialog,
    lastGameScore,
    lastGameModeForScore,
    submitHighScore,
    returnToMainMenu,
    continueGameFromSave,
    explicitlySaveCurrentGame,
    resetUltimateChampionStatusInHook,
  };
};
