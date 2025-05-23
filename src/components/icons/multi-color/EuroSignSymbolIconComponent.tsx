
import React from 'react';
import type { SVGProps } from 'react';

const EuroSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M18 6C14 6 12 9 12 12C12 15 14 18 18 18" stroke="#2196F3" strokeWidth="2.5" fill="none"/>
    <line x1="7" y1="10" x2="14" y2="10" stroke="#90CAF9" strokeWidth="2.5"/>
    <line x1="7" y1="14" x2="14" y2="14" stroke="#90CAF9" strokeWidth="2.5"/>
  </svg>
);

export default EuroSignSymbolIconComponent;
