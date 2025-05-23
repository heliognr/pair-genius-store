
import React from 'react';
import type { SVGProps } from 'react';

const PeaceSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" stroke="#607D8B" strokeWidth="2.5" fill="none"/>
    <line x1="12" y1="3" x2="12" y2="21" stroke="#607D8B" strokeWidth="2.5"/>
    <line x1="12" y1="12" x2="18" y2="18" stroke="#607D8B" strokeWidth="2.5"/>
    <line x1="12" y1="12" x2="6" y2="18" stroke="#607D8B" strokeWidth="2.5"/>
  </svg>
);

export default PeaceSymbolIconComponent;
