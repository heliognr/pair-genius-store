
"use client";
import type { CardData } from '@/types';
import { cn } from '@/lib/utils';
import { HelpCircle } from 'lucide-react'; // Default back icon

interface CardProps {
  card: CardData;
  onClick: (id: string) => void;
  isDisabled: boolean;
}

export const CardComponent = ({ card, onClick, isDisabled }: CardProps) => {
  const { id, iconComponent: Icon, isFlipped, isMatched } = card;

  const handleCardClick = () => {
    if (!isDisabled && !isFlipped && !isMatched) {
      onClick(id);
    }
  };

  return (
    <button
      onClick={handleCardClick}
      disabled={isDisabled || isFlipped || isMatched}
      aria-pressed={isFlipped}
      aria-label={`Card ${id.split('-')[1]}`}
      className={cn(
        "w-full aspect-square rounded-md shadow-md transition-all duration-300 ease-in-out card-flip-container",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isFlipped && "flipped",
        isMatched ? "bg-accent/30 border-accent border-2" : "bg-card",
        (isDisabled || isFlipped || isMatched) && !isMatched ? "cursor-default" : "cursor-pointer hover:shadow-lg"
      )}
    >
      <div className="card-flipper">
        <div className={cn(
          "card-front bg-secondary flex items-center justify-center",
          isMatched ? "bg-accent/20" : "bg-primary/70 hover:bg-primary/90" // Softer primary for card back
        )}>
          <HelpCircle className="w-1/2 h-1/2 text-primary-foreground opacity-70" />
        </div>
        <div className={cn(
          "card-back bg-card flex items-center justify-center",
           isMatched ? "bg-accent/30" : "bg-background"
        )}>
          <Icon className={cn("w-3/4 h-3/4", isMatched ? "text-accent-foreground" : "text-primary")} />
        </div>
      </div>
    </button>
  );
};
