
'use client';

import type { SavedGameState, SavedCardData, CardData, ThemeId } from '@/types';
import { THEMES } from '@/lib/themes'; 
import { LEVELS } from './levels';

const SAVE_GAME_KEY = 'pairGenius-savedGame';

export function saveGameState(state: Omit<SavedGameState, 'timestamp' | 'cards'> & { cards: CardData[] }): void {
  if (typeof window === 'undefined') return;

  const serializableCards: SavedCardData[] = state.cards.map(card => ({
    id: card.id,
    value: card.value, 
    isFlipped: card.isFlipped,
    isMatched: card.isMatched,
  }));

  const gameStateToSave: SavedGameState = {
    ...state,
    cards: serializableCards,
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(SAVE_GAME_KEY, JSON.stringify(gameStateToSave));
    console.log("Game state saved:", gameStateToSave);
  } catch (error) {
    console.error("Error saving game state to localStorage:", error);
  }
}

export function loadGameState(): SavedGameState | null {
  if (typeof window === 'undefined') return null;

  const savedStateJSON = localStorage.getItem(SAVE_GAME_KEY);
  if (savedStateJSON) {
    try {
      const parsedState = JSON.parse(savedStateJSON) as SavedGameState;
      if (parsedState && parsedState.cards && parsedState.currentDifficultyId && parsedState.currentThemeId) {
         console.log("Game state loaded from localStorage:", parsedState);
        return parsedState;
      } else {
        console.warn("Invalid saved game state found in localStorage. Clearing.");
        clearSavedGameState();
        return null;
      }
    } catch (error) {
      console.error("Error parsing saved game state from localStorage:", error);
      clearSavedGameState(); 
      return null;
    }
  }
  return null;
}

export function clearSavedGameState(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SAVE_GAME_KEY);
  console.log("Saved game state cleared from localStorage.");
}

export function reconstructCards(savedCards: SavedCardData[], themeId: ThemeId): CardData[] {
  const currentTheme = THEMES.find(t => t.id === themeId);
  if (!currentTheme) {
    console.error(`Theme with id ${themeId} not found during card reconstruction.`);
    return [];
  }

  return savedCards.map(savedCard => {
    let iconComponent: React.ElementType | undefined = undefined;
    
    // card.value is expected to be like "themeId-iconINDEX" e.g., "fruits-icon5"
    const valueParts = savedCard.value.split('-icon');
    let iconIndex = -1;
    if (valueParts.length === 2) {
        iconIndex = parseInt(valueParts[1], 10);
    }

    if (iconIndex !== -1 && currentTheme.icons[iconIndex]) {
      iconComponent = currentTheme.icons[iconIndex];
    } else {
      console.warn(`Could not reconstruct icon for value: ${savedCard.value} in theme ${themeId} using index. Falling back to first icon.`);
      iconComponent = currentTheme.icons[0]; // Fallback
    }

    if (!iconComponent) {
        // This should ideally not be reached if the above logic is sound and themes are complete
        console.error(`Critical error: Icon component is undefined for card ${savedCard.id}. Using fallback.`);
        iconComponent = currentTheme.icons[0]; // Absolute fallback
    }

    return {
      ...savedCard,
      iconComponent: iconComponent as React.ElementType<{ className?: string }>,
    };
  });
}
