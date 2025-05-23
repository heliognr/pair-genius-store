
import React from 'react';
import type { SVGProps } from 'react';

const WheelchairSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="9" cy="5" r="2" fill="#1976D2"/>
    <path d="M9 7V14L15 16V12H18L15 7H9Z" fill="#2196F3"/>
    <circle cx="15" cy="18" r="4" stroke="#1976D2" strokeWidth="2" fill="none"/>
    <circle cx="15" cy="18" r="1.5" fill="#1976D2"/>
  </svg>
);

export default WheelchairSymbolIconComponent;
