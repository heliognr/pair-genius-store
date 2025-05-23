
import React from 'react';
import type { SVGProps } from 'react';

const YawningFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M8 11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="12" cy="16" rx="3.5" ry="2" fill="#1F2937"/>
  </svg>
);

export default YawningFaceIconComponent;
