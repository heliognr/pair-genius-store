
import type { GameMode, GameModeId } from '@/types';

export const GAME_MODES: GameMode[] = [
  {
    id: 'classic',
    nameKey: 'gameModeClassic',
    displayName: 'Classic',
  },
  {
    id: 'levels',
    nameKey: 'gameModeLevels', // New translation key needed
    displayName: 'Levels Mode',
  },
];

export const DEFAULT_GAME_MODE_ID: GameModeId = 'classic';
