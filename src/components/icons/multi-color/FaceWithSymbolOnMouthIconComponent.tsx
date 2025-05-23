
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithSymbolOnMouthIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <rect x="8" y="14" width="8" height="2" fill="#424242"/>
    <path d="M10 14.5L9 15.5M14 14.5L15 15.5M12 14V16" stroke="#757575" strokeWidth="0.5"/>
  </svg>
);

export default FaceWithSymbolOnMouthIconComponent;
