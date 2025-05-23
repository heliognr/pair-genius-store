// No arquivo: src/components/ui/GameTitle.tsx

// Remova a importação de 'next/image' se não for usada noutro local neste ficheiro
// import Image from 'next/image'; 

import { useTranslation } from '@/contexts/LanguageContext';

export const GameTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3">
      {/* Usar uma tag <img> HTML simples para garantir compatibilidade no Tauri */}
      <img
        src="/icon.png" // O caminho continua a ser relativo à raiz da pasta 'out'
        alt={t('pairGenius') + " " + t('logo')}
        width={40}
        height={40}
        className="object-contain"
        // Pode adicionar um manipulador de erro se a imagem não carregar
        onError={(e) => {
          console.error("Erro ao carregar o ícone do GameTitle:", e.target.src);
          e.target.onerror = null; // Evita loop infinito de erro
          // Opcional: Substituir por um ícone de fallback ou ocultar
          // e.target.src = "https://placehold.co/40x40/cccccc/000000?text=Icon";
        }}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        {t('pairGenius')}
      </h1>
    </div>
  );
};
