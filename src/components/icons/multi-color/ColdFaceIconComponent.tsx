
import React from 'react';
import type { SVGProps } from 'react';

const ColdFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#ADD8E6"/>
    <path d="M8 9L9 11M15 9L16 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 15C10 14 11 15 12 14C13 13 14 14 15 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <rect x="10" y="16" width="1" height="2" fill="#1F2937"/>
    <rect x="13" y="16" width="1" height="2" fill="#1F2937"/>
    <path d="M7 6L5 5M17 6L19 5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default ColdFaceIconComponent;
