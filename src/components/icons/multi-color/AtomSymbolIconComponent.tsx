
import React from 'react';
import type { SVGProps } from 'react';

const AtomSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="2" fill="#42A5F5"/>
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#90CAF9" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#90CAF9" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#90CAF9" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

export default AtomSymbolIconComponent;
