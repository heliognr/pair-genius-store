
import React from 'react';
import type { SVGProps } from 'react';

const PoundSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M6 18L6 6C6 4 8 3 10 3C12 3 14 5 14 7C14 9 12 10 10 10H18" stroke="#E91E63" strokeWidth="2.5" fill="none"/>
    <line x1="4" y1="13" x2="16" y2="13" stroke="#F06292" strokeWidth="2.5"/>
  </svg>
);

export default PoundSignSymbolIconComponent;
