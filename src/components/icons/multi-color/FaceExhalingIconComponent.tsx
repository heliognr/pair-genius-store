
import React from 'react';
import type { SVGProps } from 'react';

const FaceExhalingIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M8 11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="12" cy="15.5" rx="2" ry="1" fill="#1F2937" opacity="0.7"/>
    <path d="M16 14 Q18 12 20 14" stroke="#90A4AE" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
    <path d="M17 15 Q19 13 21 15" stroke="#90A4AE" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export default FaceExhalingIconComponent;
