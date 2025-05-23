
import React from 'react';
import type { SVGProps } from 'react';

const NauseatedFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#A5D6A7"/> {/* Greenish face */}
    <path d="M7 9L9 11" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/> {/* Eyebrow left */}
    <path d="M17 9L15 11" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/> {/* Eyebrow right */}
    <path d="M8 15C9 14 10 15 11 14C12 13 13 14 14 14C15 13 16 14 16 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none"/> {/* Wobbly mouth */}
  </svg>
);

export default NauseatedFaceIconComponent;
