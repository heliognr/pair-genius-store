
"use client";
import Image from 'next/image';
import { useTranslation } from '@/contexts/LanguageContext';

export const GameTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3">
      {/* 
        INSTRUÇÕES:
        1. Certifique-se de que o seu arquivo de imagem PNG chamado "icon.png"
           está na pasta "public" na raiz do seu projeto.
        2. Se o nome do seu arquivo for diferente de "icon.png", ajuste o 
           atributo "src" abaixo.
      */}
      <Image
        src="/icon.png" // Aponta para public/icon.png
        alt={t('pairGenius') + " " + t('logo')}
        width={40} 
        height={40} 
        className="object-contain"
        // priority prop removida para simplificar e testar
      />
      <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        {t('pairGenius')}
      </h1>
    </div>
  );
};
