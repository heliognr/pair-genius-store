
"use client";
// Removed LanguageSelector import
import { ThemeSelector } from '@/components/controls/ThemeSelector';
import { DifficultySelector } from '@/components/controls/DifficultySelector';
import { GameModeSelector } from '@/components/controls/GameModeSelector';
import type { DifficultyId, ThemeId, GameModeId } from '@/types';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { RotateCcw, Volume2, Music } from 'lucide-react';
import Volume2WithSlash from '@/components/icons/utility/Volume2WithSlash';
import MusicWithSlash from '@/components/icons/utility/MusicWithSlash';
import { useTranslation } from '@/contexts/LanguageContext';
import { useSound } from '@/contexts/SoundContext';
import { GameTitle } from '@/components/ui/GameTitle';
import { VolumeSlider } from '@/components/controls/VolumeSlider';

interface HeaderProps {
  currentDifficultyId: DifficultyId;
  onDifficultyChange: (difficultyId: DifficultyId) => void;
  currentThemeId: ThemeId;
  onThemeChange: (themeId: ThemeId) => void;
  currentGameModeId: GameModeId;
  onGameModeChange: (gameModeId: GameModeId) => void;
  onNewGame: () => void;
}

export const Header = ({
  currentDifficultyId,
  onDifficultyChange,
  currentThemeId,
  onThemeChange,
  currentGameModeId,
  onGameModeChange,
  onNewGame
}: HeaderProps) => {
  const { t } = useTranslation();
  const { sfxEnabled, toggleSfx, bgmEnabled, toggleBgm, sfxVolume, setSfxVolume, bgmVolume, setBgmVolume } = useSound();

  return (
    <header
      className="p-3 md:p-4 bg-background/70 backdrop-blur-md shadow-sm sticky top-[40px] z-40" // Positioned below a 40px high Menubar
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
        <GameTitle />
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-2 md:mt-0">
          <div className="flex flex-nowrap items-center gap-2 sm:gap-2.5">
            <GameModeSelector currentGameModeId={currentGameModeId} onGameModeChange={onGameModeChange} />
            <DifficultySelector currentDifficultyId={currentDifficultyId} onDifficultyChange={onDifficultyChange} />
          </div>
          <div className="flex flex-nowrap items-center gap-2 sm:gap-2.5">
            <ThemeSelector currentThemeId={currentThemeId} onThemeChange={onThemeChange} />
            {/* LanguageSelector removed from here */}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" aria-label={sfxEnabled ? t('sfxOff') : t('sfxOn')}>
                {sfxEnabled ? <Volume2 className="h-5 w-5" /> : <Volume2WithSlash className="h-5 w-5" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t('sfx')}</span>
                <Button onClick={toggleSfx} variant="ghost" size="icon" className="h-7 w-7">
                  {sfxEnabled ? <Volume2 className="h-4 w-4" /> : <Volume2WithSlash className="h-4 w-4" />}
                </Button>
              </div>
              <VolumeSlider label={t('sfxVolume')} value={sfxVolume} onValueChange={setSfxVolume} />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" aria-label={bgmEnabled ? t('bgmOff') : t('bgmOn')}>
                {bgmEnabled ? <Music className="h-5 w-5" /> : <MusicWithSlash className="h-5 w-5" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-3 space-y-2">
               <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t('bgm')}</span>
                <Button onClick={toggleBgm} variant="ghost" size="icon" className="h-7 w-7">
                  {bgmEnabled ? <Music className="h-4 w-4" /> : <MusicWithSlash className="h-4 w-4" />}
                </Button>
              </div>
               <VolumeSlider label={t('bgmVolume')} value={bgmVolume} onValueChange={setBgmVolume} />
            </PopoverContent>
          </Popover>
          
          <Button onClick={onNewGame} variant="default" size="default" className="shadow-lg flex-shrink-0">
            <RotateCcw className="mr-2 h-5 w-5" /> {t('restartLevel')} {/* Changed from t('newGame') */}
          </Button>
        </div>
      </div>
    </header>
  );
};
