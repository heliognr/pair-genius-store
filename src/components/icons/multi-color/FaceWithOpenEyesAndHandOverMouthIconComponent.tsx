
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithOpenEyesAndHandOverMouthIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="2" fill="#FFFFFF"/> <circle cx="9" cy="10" r="1" fill="#1F2937"/>
    <circle cx="15" cy="10" r="2" fill="#FFFFFF"/> <circle cx="15" cy="10" r="1" fill="#1F2937"/>
    <path d="M7 14H17V17H7V14Z" fill="#FDBA74"/>
  </svg>
);

export default FaceWithOpenEyesAndHandOverMouthIconComponent;
