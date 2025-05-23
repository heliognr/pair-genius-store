
import React from 'react';
import type { SVGProps } from 'react';

const NarwhalIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 12C5 8 9 5 15 5C18 5 20 7 20 10C20 13 17 15 14 16L10 19L5 12Z" fill="#B0BEC5"/>
    <path d="M15 5L22 2" stroke="#90A4AE" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="7" r="0.7" fill="black"/>
  </svg>
);

export default NarwhalIconComponent;
