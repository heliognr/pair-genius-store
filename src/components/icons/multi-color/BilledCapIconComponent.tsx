
import React from 'react';
import type { SVGProps } from 'react';

const BilledCapIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M4 10C4 7 7 5 12 5C17 5 20 7 20 10H4Z" fill="#2196F3"/>
    <path d="M3 10H21V12H3V10Z" fill="#1976D2"/>
    <circle cx="12" cy="5.5" r="1" fill="#FFFFFF"/>
  </svg>
);

export default BilledCapIconComponent;
