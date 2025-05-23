
import React from 'react';
import type { SVGProps } from 'react';

const SneezingFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M7 10C7 9.44772 7.44772 9 8 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H8C7.44772 11 7 10.5523 7 10Z" fill="#1F2937"/> {/* Eye left (squint) */}
    <path d="M13 10C13 9.44772 13.4477 9 14 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H14C13.4477 11 13 10.5523 13 10Z" fill="#1F2937"/> {/* Eye right (squint) */}
    <path d="M8 15C8 15 9 13 10 13H14C15 13 16 15 16 15" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/> {/* Mouth */}
    <path d="M17 14L20 12M17 12L20 14" stroke="#81D4FA" strokeWidth="1.5" strokeLinecap="round"/> {/* Sneeze spray */}
  </svg>
);

export default SneezingFaceIconComponent;
