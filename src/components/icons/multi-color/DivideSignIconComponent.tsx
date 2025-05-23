
import React from 'react';
import type { SVGProps } from 'react';

const DivideSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <line x1="4" y1="12" x2="20" y2="12" stroke="#FF9800" strokeWidth="2"/>
    <circle cx="12" cy="8" r="1.5" fill="#FFC107"/>
    <circle cx="12" cy="16" r="1.5" fill="#FFC107"/>
  </svg>
);

export default DivideSignIconComponent;
