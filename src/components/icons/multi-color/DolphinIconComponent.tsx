
import React from 'react';
import type { SVGProps } from 'react';

const DolphinIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 12C5 8 9 5 15 5C18 5 20 7 20 10C20 13 17 15 14 16L10 19L5 12Z" fill="#4FC3F7"/>
    <path d="M6 11C6 9 9.5 6.5 15 6.5C17 6.5 18.5 8 18.5 10C18.5 12 16.5 14 14 14.5L10.5 17L6 11Z" fill="#81D4FA"/>
    <path d="M14 16L12 20M10 19L7 17" stroke="#29B6F6" strokeWidth="1"/>
    <circle cx="16" cy="7" r="0.7" fill="black"/>
  </svg>
);

export default DolphinIconComponent;
