
import React from 'react';
import type { SVGProps } from 'react';

const CrabIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="7" ry="5" fill="#FF5722"/>
    <path d="M5 12L2 9M19 12L22 9" stroke="#BF360C" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 17L4 20M17 17L20 20" stroke="#BF360C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 10L6 7M16 10L18 7" stroke="#BF360C" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="13" r="0.7" fill="white"/> <circle cx="14" cy="13" r="0.7" fill="white"/>
  </svg>
);

export default CrabIconComponent;
