
import React from 'react';
import type { SVGProps } from 'react';

const PercentSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="7" cy="7" r="3" stroke="#FF7043" strokeWidth="2" fill="#FFCCBC"/>
    <circle cx="17" cy="17" r="3" stroke="#FF7043" strokeWidth="2" fill="#FFCCBC"/>
    <line x1="5" y1="19" x2="19" y2="5" stroke="#FF8A65" strokeWidth="2.5"/>
  </svg>
);

export default PercentSignSymbolIconComponent;
