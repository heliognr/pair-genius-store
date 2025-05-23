
import React from 'react';
import type { SVGProps } from 'react';

const GrasshopperIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="7" ry="3" fill="#AED581"/>
    <ellipse cx="12" cy="10" rx="3" ry="2" fill="#8BC34A"/>
    <path d="M10 8L8 5M14 8L16 5" stroke="#689F38" strokeWidth="1"/>
    <path d="M8 16L6 19M16 16L18 19" stroke="#689F38" strokeWidth="1.5"/>
    <ellipse cx="10" cy="12" rx="3" ry="4" fill="#C5E1A5" transform="rotate(-20 10 12)"/>
    <ellipse cx="14" cy="12" rx="3" ry="4" fill="#C5E1A5" transform="rotate(20 14 12)"/>
  </svg>
);

export default GrasshopperIconComponent;
