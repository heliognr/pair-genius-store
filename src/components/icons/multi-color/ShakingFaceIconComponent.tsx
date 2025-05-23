
import React from 'react';
import type { SVGProps } from 'react';

const ShakingFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M8 15C9 14 10 15 11 14C12 13 13 14 14 14C15 13 16 14 16 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M3 12L5 11M19 12L21 11" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M4 10L6 9M18 10L20 9" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

export default ShakingFaceIconComponent;
