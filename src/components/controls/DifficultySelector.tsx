
"use client";
import type { DifficultyId } from '@/types';
import { LEVELS } from '@/lib/levels';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

interface DifficultySelectorProps {
  currentDifficultyId: DifficultyId;
  onDifficultyChange: (difficultyId: DifficultyId) => void;
}

export const DifficultySelector = ({ currentDifficultyId, onDifficultyChange }: DifficultySelectorProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="difficulty-select" className="text-sm font-medium text-foreground/80 sr-only">{t('selectDifficulty')}</Label>
      <Select
        value={currentDifficultyId}
        onValueChange={(value) => onDifficultyChange(value as DifficultyId)}
      >
        <SelectTrigger id="difficulty-select" className="w-full bg-background/80 backdrop-blur-sm"> {/* Removed min-w classes */}
          <SelectValue placeholder={t('selectDifficulty')} />
        </SelectTrigger>
        <SelectContent>
          {LEVELS.map((level) => (
            <SelectItem key={level.id} value={level.id}>
              {t(level.nameKey as any) || level.displayName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
