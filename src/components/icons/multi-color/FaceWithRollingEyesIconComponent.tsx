
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithRollingEyesIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="8" r="1.5" fill="#FFFFFF"/> <circle cx="9" cy="7.5" r="0.7" fill="#1F2937"/>
    <circle cx="15" cy="8" r="1.5" fill="#FFFFFF"/> <circle cx="15" cy="7.5" r="0.7" fill="#1F2937"/>
    <path d="M8 15H16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default FaceWithRollingEyesIconComponent;
