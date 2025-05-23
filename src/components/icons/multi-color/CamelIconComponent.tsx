
import React from 'react';
import type { SVGProps } from 'react';

const CamelIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 20V10C5 7 8 5 11 5C14 5 15 7 16 9C17 7 18 5 20 5C21 5 22 7 22 10V20H5Z" fill="#D2B48C"/>
    <path d="M11 5C10 3 8 2 6 3M20 5C21 3 23 2 22 3" stroke="#A0522D" strokeWidth="1"/>
    <ellipse cx="11" cy="12" rx="3" ry="2" fill="#BC8F8F"/>
    <ellipse cx="18" cy="12" rx="3" ry="2" fill="#BC8F8F"/>
    <circle cx="7" cy="7" r="1" fill="black"/>
  </svg>
);

export default CamelIconComponent;
