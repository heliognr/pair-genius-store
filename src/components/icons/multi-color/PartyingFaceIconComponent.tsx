
import React from 'react';
import type { SVGProps } from 'react';

const PartyingFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M8 14C8 14 9.5 17.5 12 17.5C14.5 17.5 16 14 16 14H8Z" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1"/>
    <path d="M9 6L7 4H11L9 6Z" fill="#EF4444"/> {/* Party Hat */}
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M6 6L4 7M18 6L20 7" stroke="#4CAF50" strokeWidth="1"/> {/* Streamers */}
  </svg>
);

export default PartyingFaceIconComponent;
