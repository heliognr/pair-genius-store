
import React from 'react';
import type { SVGProps } from 'react';

const YakIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="8" ry="6" fill="#6D4C41"/>
    <path d="M9 8C7 6 5 7 5 9M15 8C17 6 19 7 19 9" stroke="#A1887F" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="12" cy="10" r="3" fill="#8D6E63"/>
    <circle cx="11" cy="9.5" r="0.5" fill="black"/> <circle cx="13" cy="9.5" r="0.5" fill="black"/>
  </svg>
);

export default YakIconComponent;
