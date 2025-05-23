
import React from 'react';
import type { SVGProps } from 'react';

const CrosshairsIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="8" stroke="#EF5350" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="#EF5350"/>
    <line x1="12" y1="2" x2="12" y2="8" stroke="#EF5350" strokeWidth="2"/>
    <line x1="12" y1="16" x2="12" y2="22" stroke="#EF5350" strokeWidth="2"/>
    <line x1="2" y1="12" x2="8" y2="12" stroke="#EF5350" strokeWidth="2"/>
    <line x1="16" y1="12" x2="22" y2="12" stroke="#EF5350" strokeWidth="2"/>
  </svg>
);

export default CrosshairsIconComponent;
