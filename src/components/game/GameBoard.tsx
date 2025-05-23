
"use client";
import type { CardData, Level } from '@/types';
import { CardComponent } from './Card';
import { cn } from '@/lib/utils';

interface GameBoardProps {
  cards: CardData[];
  level: Level;
  onCardClick: (id: string) => void;
  isChecking: boolean;
}

export const GameBoard = ({ cards, level, onCardClick, isChecking }: GameBoardProps) => {
  const gridColsClass = `grid-cols-${level.cols}`;
  // Tailwind JIT needs full class names, so we might need to use style or map specific classes
  // For simplicity, let's use a map for now or inline style if it's too complex.
  // A better way is to have specific classes for each column count if they are fixed.
  // Example: grid-cols-2, grid-cols-3, grid-cols-4, grid-cols-5

  let gridStyle = {};
  if (level.cols === 2) gridStyle = { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' };
  else if (level.cols === 3) gridStyle = { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' };
  else if (level.cols === 4) gridStyle = { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' };
  else if (level.cols === 5) gridStyle = { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' };
  else if (level.cols === 6) gridStyle = { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' };
  else if (level.cols === 7) gridStyle = { gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' };
  else if (level.cols === 8) gridStyle = { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' };
  else if (level.cols === 9) gridStyle = { gridTemplateColumns: 'repeat(9, minmax(0, 1fr))' };
  else if (level.cols === 10) gridStyle = { gridTemplateColumns: 'repeat(10, minmax(0, 1fr))' };
  else if (level.cols === 12) gridStyle = { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' };


  return (
    <div
      className={cn(
        "grid gap-1 sm:gap-2 md:gap-3 p-2 mx-auto w-full",
        level.cols > 7 ? "max-w-5xl" : "max-w-2xl" // Allow wider board for more columns
      )}
      style={gridStyle}
      aria-label="Game Board"
    >
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          card={card}
          onClick={onCardClick}
          isDisabled={isChecking}
        />
      ))}
    </div>
  );
};
