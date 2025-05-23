
import React from 'react';
import type { SVGProps } from 'react';

const SnakeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 18C5 15 8 13 12 13C16 13 19 15 19 18C19 21 16 20 12 17C8 14 5 15 5 12C5 9 8 6 12 6C16 6 19 9 19 12" stroke="#8BC34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="18" cy="12" r="1" fill="red"/>
    <path d="M19 12L21 11M21 13L19 12" stroke="#BF360C" strokeWidth="1"/>
  </svg>
);

export default SnakeIconComponent;
