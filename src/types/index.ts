
import type { LucideIcon } from 'lucide-react';
import type React from 'react';

export interface CardData {
  id: string; // Unique ID for React key, e.g., "fruit-apple-1"
  value: string; // Identifier for matching, e.g., "apple"
  iconComponent: React.ElementType<{ className?: string }>;
  isFlipped: boolean;
  isMatched: boolean;
}

// For saving game state, we don't store the actual iconComponent
export interface SavedCardData {
  id: string;
  value: string; // This will be used to reconstruct the iconComponent
  isFlipped: boolean;
  isMatched: boolean;
}

export type ThemeId = 'fruits' | 'animals' | 'emojis' | 'symbols';
export interface Theme {
  id: ThemeId;
  nameKey: string; // For translation, e.g., "themeFruits"
  icons: React.ElementType<{ className?: string }>[];
  displayName: string; // For direct display if translation hook is not used or as fallback
}

export type DifficultyId = 'level1' | 'level2' | 'level3' | 'level4' | 'level5' | 'level6' | 'level7' | 'level8' | 'level9' | 'level10' | 'level11' | 'level12';
export interface Level {
  id: DifficultyId;
  nameKey: string; // For translation
  rows: number;
  cols: number;
  totalPairs: number;
  displayName: string; // For direct display
  timeLimit?: number; // Optional: in seconds for time limit mode
  moveLimit?: number; // Optional: for move limit mode
  musicTrack?: string; // Path to the music track for this level, e.g., "music_easy.mp3"
}

export type GameModeId = 'classic' | 'levels';
export interface GameMode {
  id: GameModeId;
  nameKey: string;
  displayName: string;
}

export type SupportedLanguage = 'en' | 'es' | 'fr' | 'it' | 'pt';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string; // Native name
}

export interface SoundSettings {
  sfxEnabled: boolean;
  bgmEnabled: boolean;
  sfxVolume: number;
  setSfxVolume: (volume: number) => void;
  bgmVolume: number;
  setBgmVolume: (volume: number) => void;
}

export type SfxType = 'flip' | 'match' | 'mismatch' | 'win' | 'lose';

export interface HighScoreEntry {
  id: string; // Unique ID for the entry
  playerName: string;
  score: number; // Time in seconds or number of moves
  difficultyId: DifficultyId; // Will represent 'levelX'
  gameModeId: GameModeId; // Will primarily be 'levels' for scored games
  timestamp: number;
}

export interface UltimateChampionInfo {
  achieved: boolean;
  playerName: string | null;
}

export interface SavedGameState {
  cards: SavedCardData[];
  flippedCardIds: string[];
  matchedCardValues: string[];
  moves: number;
  gameWon: boolean;
  allLevelsBeaten: boolean;
  ultimateChampionInfo?: UltimateChampionInfo;
  gameOverReason: 'time' | 'moves' | null;
  currentDifficultyId: DifficultyId; // Represents the current level
  currentThemeId: ThemeId;
  currentGameModeId: GameModeId;
  remainingTime: number | null;
  isTimerActive: boolean;
  timestamp: number;
}
