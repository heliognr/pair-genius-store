
import React from 'react';
import type { SVGProps } from 'react';

const FrogIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="7" ry="5" fill="#8BC34A"/>
    <circle cx="9" cy="10" r="2.5" fill="#AED581"/>
    <circle cx="15" cy="10" r="2.5" fill="#AED581"/>
    <circle cx="9" cy="10" r="1" fill="black"/>
    <circle cx="15" cy="10" r="1" fill="black"/>
    <path d="M9 17L7 20M15 17L17 20" stroke="#689F38" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default FrogIconComponent;
