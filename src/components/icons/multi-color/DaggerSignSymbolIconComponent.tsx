
import React from 'react';
import type { SVGProps } from 'react';

const DaggerSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <line x1="12" y1="3" x2="12" y2="21" stroke="#78909C" strokeWidth="2.5"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke="#90A4AE" strokeWidth="2.5"/>
  </svg>
);

export default DaggerSignSymbolIconComponent;
