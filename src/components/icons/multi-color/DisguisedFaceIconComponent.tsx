
import React from 'react';
import type { SVGProps } from 'react';

const DisguisedFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    {/* Glasses */}
    <path d="M7 9H17L16 12H8L7 9Z" fill="#78909C"/>
    <path d="M10 8C10 7 10.5 6 12 6C13.5 6 14 7 14 8" stroke="#546E7A" strokeWidth="1" fill="none"/>
    {/* Nose */}
    <path d="M10 12L12 15L14 12" fill="#FDD835"/>
    {/* Mouth (mustache) */}
    <path d="M9 15C9 15 10 17 12 17C14 17 15 15 15 15" stroke="#4E342E" strokeWidth="1.5" fill="#795548" strokeLinecap="round"/>
  </svg>
);

export default DisguisedFaceIconComponent;
