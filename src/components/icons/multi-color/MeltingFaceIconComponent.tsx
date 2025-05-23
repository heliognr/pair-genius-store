
import React from 'react';
import type { SVGProps } from 'react';

const MeltingFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C6 2 3 7 3 12C3 17 7 22 12 22C17 22 21 17 21 12C21 7 18 2 12 2Z" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M8 14C8 14 9.5 16.5 12 16.5C14.5 16.5 16 14 16 14" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M6 18C6 18 8 20 12 20C16 20 18 18 18 18" fill="#FB8C00" opacity="0.7"/>
    <path d="M7 19.5L8 21M17 19.5L16 21" stroke="#FB8C00" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default MeltingFaceIconComponent;
