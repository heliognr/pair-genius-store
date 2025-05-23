// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a clean UI font
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { SoundProvider } from '@/contexts/SoundContext';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/contexts/ThemeContext';
// Remova esta linha:
// import Script from 'next/script'; // <--- Importe o componente Script aqui

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Pair Genius',
  description: 'A fun memory matching game by Hélio Vieira.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Tag do Manifesto */}
        <link rel="manifest" href="/manifest.json" />

        {/* Injeção Manual do Script de Registro do Service Worker (Apenas em Produção) */}
        {/* Use uma tag <script> HTML normal com 'defer' para garantir execução precoce e confiável */}
        {process.env.NODE_ENV === 'production' && (
          // <Script
          //   src="/register-sw.js" // Caminho para o seu novo arquivo de registro
          //   strategy="lazyOnload" // Carrega o script após a página carregar (melhor performance)
          //   id="register-service-worker" // Adicione um ID para facilitar a depuração, se necessário
          // />
          // Substitua o Script de Next.js por uma tag script HTML nativa
          <script src="/register-sw.js" defer></script>
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <SoundProvider>
              <TooltipProvider>
                {children}
                <Toaster />
              </TooltipProvider>
            </SoundProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}