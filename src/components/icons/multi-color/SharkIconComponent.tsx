
import React from 'react';
import type { SVGProps } from 'react';

const SharkIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M2 12L10 6L20 10L12 20L5 15L2 12Z" fill="#78909C"/>
    <path d="M3 11.5L10 7L18.5 10.5L12 18L6 14L3 11.5Z" fill="#90A4AE"/>
    <path d="M10 6L12 3L13 6M18 10L22 9" stroke="#546E7A" strokeWidth="1"/>
    <circle cx="8" cy="8" r="0.7" fill="red"/>
  </svg>
);

export default SharkIconComponent;
