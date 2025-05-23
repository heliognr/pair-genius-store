
import React from 'react';
import type { SVGProps } from 'react';

const PepinoMelonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="6" ry="8" fill="#FFF59D"/>
    <path d="M10 8L9 10" stroke="#CE93D8" strokeWidth="1" strokeLinecap="round"/>
    <path d="M14 8L15 10" stroke="#CE93D8" strokeWidth="1" strokeLinecap="round"/>
    <path d="M12 16L11 14" stroke="#CE93D8" strokeWidth="1" strokeLinecap="round"/>
    <path d="M12 16L13 14" stroke="#CE93D8" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default PepinoMelonIconComponent;
