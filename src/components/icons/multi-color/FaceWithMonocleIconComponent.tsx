
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithMonocleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="8.5" cy="10" r="3" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1.5"/>
    <circle cx="8.5" cy="10" r="1" fill="#1F2937"/>
    <line x1="6" y1="8" x2="4" y2="6" stroke="#1F2937" strokeWidth="1"/>
    <path d="M8 15H16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default FaceWithMonocleIconComponent;
