
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithHeadBandageIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/> <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M8 16C8 16 9.5 13.5 12 13.5C14.5 13.5 16 16 16 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="5" width="12" height="3" rx="1" fill="#FFFFFF" stroke="#BDBDBD" strokeWidth="0.5"/>
    <line x1="8" y1="6.5" x2="9" y2="6.5" stroke="#BDBDBD" strokeWidth="0.5"/>
    <line x1="15" y1="6.5" x2="16" y2="6.5" stroke="#BDBDBD" strokeWidth="0.5"/>
  </svg>
);

export default FaceWithHeadBandageIconComponent;
