
import React from 'react';
import type { SVGProps } from 'react';

const ExplodingHeadIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 14C8 14 6 17 6 19H18C18 17 16 14 12 14Z" fill="#FBBF24"/> {/* Lower face */}
    <path d="M12 2C6 4 4 10 8 12C10 13 14 13 16 12C20 10 18 4 12 2Z" fill="#FFCA28"/> {/* Mushroom cloud top */}
    <path d="M10 4L8 2M14 4L16 2M12 5L12 1M7 7L5 5M17 7L19 5" stroke="#FB8C00" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="12" cy="16" rx="2" ry="1" fill="#1F2937"/> {/* Mouth */}
  </svg>
);

export default ExplodingHeadIconComponent;
