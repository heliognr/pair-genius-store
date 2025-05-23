
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithPeekingEyeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M7 14H17V17H7V14Z" fill="#FDBA74"/> {/* Hand */}
    <circle cx="12" cy="10" r="2" fill="#FFFFFF"/> {/* Eye white */}
    <circle cx="12" cy="10" r="1" fill="#1F2937"/> {/* Pupil */}
    <path d="M10 15.5H14" stroke="#E4A764" strokeWidth="0.5"/> {/* Finger line */}
  </svg>
);

export default FaceWithPeekingEyeIconComponent;
