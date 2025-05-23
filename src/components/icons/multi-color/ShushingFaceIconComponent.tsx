
import React from 'react';
import type { SVGProps } from 'react';

const ShushingFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/> <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <rect x="10" y="14" width="4" height="2" rx="1" fill="#1F2937"/>
    <path d="M7 7L9 6M17 7L15 6" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/> {/* Eyebrows */}
  </svg>
);

export default ShushingFaceIconComponent;
