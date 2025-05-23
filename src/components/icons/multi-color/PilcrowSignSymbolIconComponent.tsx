
import React from 'react';
import type { SVGProps } from 'react';

const PilcrowSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 3V21M10 3H14" stroke="#42A5F5" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 10C15 10 17 8 17 5" stroke="#1E88E5" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export default PilcrowSignSymbolIconComponent;
