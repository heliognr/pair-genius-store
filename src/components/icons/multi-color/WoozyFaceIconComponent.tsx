
import React from 'react';
import type { SVGProps } from 'react';

const WoozyFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M8 9L10 11M10 9L8 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/> {/* Wobbly eye left */}
    <path d="M14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/> {/* Squint eye right */}
    <path d="M9 15C10 14 11 15 12 14C13 13 14 14 15 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none"/> {/* Wobbly mouth */}
  </svg>
);

export default WoozyFaceIconComponent;
