
"use client";
import type { GameModeId } from '@/types';
import { GAME_MODES } from '@/lib/modes';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

interface GameModeSelectorProps {
  currentGameModeId: GameModeId;
  onGameModeChange: (gameModeId: GameModeId) => void;
}

export const GameModeSelector = ({ currentGameModeId, onGameModeChange }: GameModeSelectorProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="gamemode-select" className="text-sm font-medium text-foreground/80 sr-only">{t('selectGameMode')}</Label>
      <Select
        value={currentGameModeId}
        onValueChange={(value) => onGameModeChange(value as GameModeId)}
      >
        <SelectTrigger id="gamemode-select" className="w-full bg-background/80 backdrop-blur-sm"> {/* Removed min-w classes */}
          <SelectValue placeholder={t('selectGameMode')} />
        </SelectTrigger>
        <SelectContent>
          {GAME_MODES.map((mode) => (
            <SelectItem key={mode.id} value={mode.id}>
              {t(mode.nameKey as any) || mode.displayName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
