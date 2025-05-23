
import React from 'react';
import type { SVGProps } from 'react';

const HotFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#EF4444"/>
    <path d="M7 9L9 11" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 9L15 11" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="12" cy="16" rx="3" ry="1" fill="#1F2937"/>
    <path d="M8 7L7 5M16 7L17 5" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default HotFaceIconComponent;
