
"use client";
import type { ThemeId } from '@/types';
import { THEMES } from '@/lib/themes';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

interface ThemeSelectorProps {
  currentThemeId: ThemeId;
  onThemeChange: (themeId: ThemeId) => void;
}

export const ThemeSelector = ({ currentThemeId, onThemeChange }: ThemeSelectorProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="theme-select" className="text-sm font-medium text-foreground/80 sr-only">{t('selectTheme')}</Label>
      <Select
        value={currentThemeId}
        onValueChange={(value) => onThemeChange(value as ThemeId)}
      >
        <SelectTrigger id="theme-select" className="w-full bg-background/80 backdrop-blur-sm"> {/* Removed min-w classes */}
          <SelectValue placeholder={t('selectTheme')} />
        </SelectTrigger>
        <SelectContent>
          {THEMES.map((theme) => (
            <SelectItem key={theme.id} value={theme.id}>
              {t(theme.nameKey as any) || theme.displayName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
