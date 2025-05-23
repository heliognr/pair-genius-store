
'use client';

import type { HighScoreEntry, DifficultyId, GameModeId, Level } from '@/types';
import { LEVELS } from '@/lib/levels';
import { GAME_MODES } from '@/lib/modes';

const MAX_HIGH_SCORES_PER_CATEGORY = 15;
export const ULTIMATE_CHAMPION_KEY = 'pairGenius-ultimateChampion'; // Export for use in useGameLogic


// Key format: pairGenius-highScores-levels-level1 (difficultyId here is the levelId)
function getStorageKey(difficultyId: DifficultyId, gameModeId: GameModeId): string {
  if (gameModeId === 'classic') {
    // Classic mode does not store high scores by difficulty
    return `pairGenius-highScores-classic`;
  }
  return `pairGenius-highScores-${gameModeId}-${difficultyId}`;
}

export function getHighScores(difficultyId: DifficultyId, gameModeId: GameModeId): HighScoreEntry[] {
  if (typeof window === 'undefined' || gameModeId === 'classic') {
    return [];
  }
  const key = getStorageKey(difficultyId, gameModeId);
  const storedScores = localStorage.getItem(key);
  if (storedScores) {
    try {
      const parsedScores = JSON.parse(storedScores) as HighScoreEntry[];
      return parsedScores.sort((a, b) => a.score - b.score);
    } catch (error) {
      console.error("Error parsing high scores from localStorage for key:", key, error);
      localStorage.removeItem(key);
      return [];
    }
  }
  return [];
}

export interface GroupedHighScore {
  difficulty: Level; // Represents the level (e.g., Level 1, Level 2)
  gameMode: typeof GAME_MODES[number]; // Will be 'levels'
  scores: HighScoreEntry[];
}

export function getAllHighScoresGrouped(): GroupedHighScore[] {
  if (typeof window === 'undefined') {
    return [];
  }
  const allScoresGrouped: GroupedHighScore[] = [];
  const levelsMode = GAME_MODES.find(mode => mode.id === 'levels');

  if (levelsMode) {
    LEVELS.forEach(level => {
      const scores = getHighScores(level.id, 'levels');
      if (scores.length > 0) {
        allScoresGrouped.push({
          difficulty: level,
          gameMode: levelsMode,
          scores: scores,
        });
      }
    });
  }
  return allScoresGrouped;
}


export function addHighScore(
  difficultyId: DifficultyId,
  gameModeId: GameModeId,
  playerName: string,
  score: number
): HighScoreEntry[] {
  if (typeof window === 'undefined' || gameModeId === 'classic') {
    return getHighScores(difficultyId, gameModeId);
  }

  const newEntry: HighScoreEntry = {
    id: crypto.randomUUID(),
    playerName: playerName || "Anonymous",
    score,
    difficultyId,
    gameModeId,
    timestamp: Date.now(),
  };

  const currentScores = getHighScores(difficultyId, gameModeId);
  currentScores.push(newEntry);
  currentScores.sort((a, b) => a.score - b.score);
  const updatedScores = currentScores.slice(0, MAX_HIGH_SCORES_PER_CATEGORY);

  const key = getStorageKey(difficultyId, gameModeId);
  try {
    localStorage.setItem(key, JSON.stringify(updatedScores));
  } catch (error) {
    console.error("Error saving high scores to localStorage", error);
  }
  return updatedScores;
}

export function isHighScore(
  difficultyId: DifficultyId,
  gameModeId: GameModeId,
  score: number
): boolean {
  if (typeof window === 'undefined' || gameModeId === 'classic') {
    return false;
  }

  const currentScores = getHighScores(difficultyId, gameModeId);
  if (currentScores.length < MAX_HIGH_SCORES_PER_CATEGORY) {
    return true;
  }
  return score < currentScores[currentScores.length - 1].score;
}

export function clearHighScores(difficultyId: DifficultyId, gameModeId: GameModeId): void {
  if (typeof window === 'undefined' || gameModeId === 'classic') {
    return;
  }
  const key = getStorageKey(difficultyId, gameModeId);
  localStorage.removeItem(key);
  console.log(`High scores cleared for ${gameModeId} - ${difficultyId}`);
}

export function clearAllHighScoresGlobally(): void {
  if (typeof window === 'undefined') {
    return;
  }
  console.log("Attempting to clear all high scores globally for 'levels' mode...");
  const levelsMode = GAME_MODES.find(mode => mode.id === 'levels');
  if (levelsMode) {
    LEVELS.forEach(level => {
      const key = getStorageKey(level.id, 'levels');
      localStorage.removeItem(key);
      console.log(`Cleared scores for: ${key}`);
    });
  }
  localStorage.removeItem(ULTIMATE_CHAMPION_KEY); // Clear ultimate champion status
  console.log(`Cleared ultimate champion status.`);
  console.log("Global high score clearing process completed for 'levels' mode.");
}
