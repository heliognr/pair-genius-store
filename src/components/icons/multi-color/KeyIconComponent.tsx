
import React from 'react';
import type { SVGProps } from 'react';

const KeyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="8" cy="8" r="4" stroke="#FFC107" strokeWidth="2" fill="none"/>
    <line x1="10" y1="10" x2="18" y2="18" stroke="#FFB300" strokeWidth="2"/>
    <line x1="15" y1="13" x2="13" y2="15" stroke="#FFB300" strokeWidth="2"/>
    <line x1="18" y1="16" x2="16" y2="18" stroke="#FFB300" strokeWidth="2"/>
  </svg>
);

export default KeyIconComponent;
