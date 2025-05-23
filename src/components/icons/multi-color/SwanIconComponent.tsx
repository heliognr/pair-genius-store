
import React from 'react';
import type { SVGProps } from 'react';

const SwanIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 16C5 12 8 9 12 9C14 9 15 7 17 6C18 5 19 5 19 7C19 10 16 14 12 16L8 20H16L19 16H5Z" fill="#FFFFFF"/>
    <path d="M17 6L16 5" stroke="#FF9800" strokeWidth="1.5" fill="none"/>
    <circle cx="17.5" cy="5.5" r="0.5" fill="black"/>
  </svg>
);

export default SwanIconComponent;
