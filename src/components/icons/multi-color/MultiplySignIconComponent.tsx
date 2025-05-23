
import React from 'react';
import type { SVGProps } from 'react';

const MultiplySignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <line x1="6" y1="6" x2="18" y2="18" stroke="#2196F3" strokeWidth="3"/>
    <line x1="18" y1="6" x2="6" y2="18" stroke="#90CAF9" strokeWidth="3"/>
  </svg>
);

export default MultiplySignIconComponent;
