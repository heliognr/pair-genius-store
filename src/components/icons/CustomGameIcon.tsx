
import type React from 'react';
import type { SVGProps } from 'react';

const CustomGameIcon: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  // IMPORTANTE: Substitua o conteúdo deste SVG pelo código SVG do seu ícone personalizado.
  // Certifique-se de que o seu SVG tenha atributos width, height e viewBox apropriados.
  // Você pode ajustar fill="currentColor" ou removê-lo se o seu SVG tiver suas próprias cores.
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" // Ajuste se o seu ícone tiver um tamanho padrão diferente
    height="24" // Ajuste se o seu ícone tiver um tamanho padrão diferente
    viewBox="0 0 24 24" // Ajuste para o viewBox do seu ícone
    fill="none" // Use "currentColor" se quiser que herde a cor do texto, ou "none" para SVGs multicoloridos
    stroke="currentColor" // Geralmente "none" se fill for usado, ou especifique a cor
    strokeWidth="2" // Ajuste conforme necessário
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Placeholder - Remova isto e cole os seus caminhos/formas SVG aqui */}
    <rect width="18" height="18" x="3" y="3" rx="2" fill="currentColor" stroke="none" />
    <line x1="8" y1="12" x2="16" y2="12" stroke="var(--background)" strokeWidth="2"/>
    <line x1="12" y1="8" x2="12" y2="16" stroke="var(--background)" strokeWidth="2"/>
    {/* Fim do Placeholder */}
  </svg>
);

export default CustomGameIcon;
