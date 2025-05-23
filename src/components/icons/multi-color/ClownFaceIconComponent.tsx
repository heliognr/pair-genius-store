
import React from 'react';
import type { SVGProps } from 'react';

const ClownFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5"/>
    <circle cx="12" cy="12" r="2.5" fill="#EF5350"/> {/* Nose */}
    <path d="M8 15C8 15 9.5 18.5 12 18.5C14.5 18.5 16 15 16 15H8Z" fill="#E53935"/> {/* Mouth */}
    <path d="M7 7L9 10L7 10Z" fill="#42A5F5"/> {/* Eye patch left */}
    <path d="M17 7L15 10L17 10Z" fill="#FFC107"/> {/* Eye patch right */}
    <path d="M10 5A4 2 0 006 7M14 5A4 2 0 0118 7" fill="#FF5722"/> {/* Hair */}
  </svg>
);

export default ClownFaceIconComponent;
