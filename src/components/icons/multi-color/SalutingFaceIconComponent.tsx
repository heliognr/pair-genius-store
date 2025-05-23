
import React from 'react';
import type { SVGProps } from 'react';

const SalutingFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M8 14C8 14 9.5 16.5 12 16.5C14.5 16.5 16 14 16 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 9L19 7L18 5" fill="#FDBA74" stroke="#E4A764" strokeWidth="0.5"/>
  </svg>
);

export default SalutingFaceIconComponent;
