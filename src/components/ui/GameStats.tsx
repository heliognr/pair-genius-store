
"use client";
import { useTranslation } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, CheckCircle2, Hourglass, Target } from 'lucide-react';
import type { GameModeId, Level } from '@/types'; // Added Level

interface GameStatsProps {
  moves: number;
  matchedPairs: number;
  currentLevel: Level; // Changed from totalPairs to currentLevel
  gameMode: GameModeId;
  remainingTime?: number | null;
  // moveLimit is now derived from currentLevel in 'levels' mode
}

export const GameStats = ({
  moves,
  matchedPairs,
  currentLevel,
  gameMode,
  remainingTime,
}: GameStatsProps) => {
  const { t } = useTranslation();

  const formatTime = (timeInSeconds: number | null | undefined) => {
    if (timeInSeconds === null || typeof timeInSeconds === 'undefined') return 'N/A';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const totalPairs = currentLevel.totalPairs;
  const moveLimit = currentLevel.moveLimit; // Get moveLimit from the level object

  return (
    <div className="flex flex-col gap-3 w-full">
      {gameMode === 'classic' && (
        <Card className="w-full bg-background/80 backdrop-blur-sm shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-3 px-3">
            <CardTitle className="text-xs md:text-sm font-medium">{t('moves')}</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pb-3 px-3">
            <div className="text-xl md:text-2xl font-bold">
              {moves}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="w-full bg-background/80 backdrop-blur-sm shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-3 px-3">
          <CardTitle className="text-xs md:text-sm font-medium">{t('pairsMatched')}</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pb-3 px-3">
          <div className="text-xl md:text-2xl font-bold">{matchedPairs} / {totalPairs}</div>
        </CardContent>
      </Card>

      {gameMode === 'levels' && currentLevel.timeLimit && (
        <Card className="w-full bg-background/80 backdrop-blur-sm shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-3 px-3">
            <CardTitle className="text-xs md:text-sm font-medium">{t('remainingTime', { time: formatTime(remainingTime) })}</CardTitle>
            <Hourglass className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pb-3 px-3">
            <div className="text-xl md:text-2xl font-bold">{formatTime(remainingTime)}</div>
          </CardContent>
        </Card>
      )}

       {gameMode === 'levels' && moveLimit !== null && moveLimit !== undefined && (
        <Card className="w-full bg-background/80 backdrop-blur-sm shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-3 px-3">
            <CardTitle className="text-xs md:text-sm font-medium">{t('remainingMovesLabel')}</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pb-3 px-3">
            <div className="text-xl md:text-2xl font-bold">{moveLimit - moves}</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
