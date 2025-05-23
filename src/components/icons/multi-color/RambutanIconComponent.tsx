
import React from 'react';
import type { SVGProps } from 'react';

const RambutanIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="6" fill="#D32F2F"/>
    <line x1="12" y1="6" x2="12" y2="3" stroke="#7CB342" strokeWidth="1"/>
    <line x1="12" y1="18" x2="12" y2="21" stroke="#7CB342" strokeWidth="1"/>
    <line x1="6" y1="12" x2="3" y2="12" stroke="#7CB342" strokeWidth="1"/>
    <line x1="18" y1="12" x2="21" y2="12" stroke="#7CB342" strokeWidth="1"/>
    <line x1="8" y1="8" x2="5" y2="5" stroke="#7CB342" strokeWidth="1"/>
    <line x1="16" y1="8" x2="19" y2="5" stroke="#7CB342" strokeWidth="1"/>
    <line x1="8" y1="16" x2="5" y2="19" stroke="#7CB342" strokeWidth="1"/>
    <line x1="16" y1="16" x2="19" y2="19" stroke="#7CB342" strokeWidth="1"/>
    <circle cx="12" cy="12" r="3" fill="#FFF9C4"/>
  </svg>
);

export default RambutanIconComponent;
