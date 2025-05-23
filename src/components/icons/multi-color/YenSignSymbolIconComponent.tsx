
import React from 'react';
import type { SVGProps } from 'react';

const YenSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <line x1="6" y1="6" x2="18" y2="18" stroke="#7E57C2" strokeWidth="2.5"/>
    <line x1="18" y1="6" x2="12" y2="12" stroke="#7E57C2" strokeWidth="2.5"/>
    <line x1="7" y1="13" x2="17" y2="13" stroke="#B39DDB" strokeWidth="2.5"/>
    <line x1="7" y1="17" x2="17" y2="17" stroke="#B39DDB" strokeWidth="2.5"/>
  </svg>
);

export default YenSignSymbolIconComponent;
