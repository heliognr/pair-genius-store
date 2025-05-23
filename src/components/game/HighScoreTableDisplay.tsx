// src/components/game/HighScoreTableDisplay.tsx
"use client"; // Este componente será executado apenas no cliente

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from '@/contexts/LanguageContext';
import type { HighScoreEntry, Level } from '@/types';
import { GAME_MODES } from '@/lib/modes'; // Assumindo que GAME_MODES é necessário para inferência de tipo

interface HighScoreTableDisplayProps {
  difficulty: Level;
  gameMode: typeof GAME_MODES[number];
  scores: HighScoreEntry[];
}

export const HighScoreTableDisplay = ({ difficulty, gameMode, scores }: HighScoreTableDisplayProps) => {
  const { t } = useTranslation();

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
