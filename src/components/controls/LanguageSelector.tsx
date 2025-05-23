
"use client";
import { useTranslation } from '@/contexts/LanguageContext';
import type { SupportedLanguage } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

export const LanguageSelector = () => {
  const { language, setLanguage, t, languages } = useTranslation();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="language-select" className="text-sm font-medium text-foreground/80 sr-only">{t('selectLanguage')}</Label>
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as SupportedLanguage)}
      >
        <SelectTrigger id="language-select" className="w-full bg-background/80 backdrop-blur-sm"> {/* Removed min-w classes */}
          <SelectValue placeholder={t('selectLanguage')} />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
