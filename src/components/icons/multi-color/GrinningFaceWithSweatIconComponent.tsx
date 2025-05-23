
import React from 'react';
import type { SVGProps } from 'react';

const GrinningFaceWithSweatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M8 10C8 9.44772 8.44772 9 9 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H8C7.44772 11 7 10.5523 7 10Z" fill="#1F2937"/>
    <path d="M13 10C13 9.44772 13.4477 9 14 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H14C13.4477 11 13 10.5523 13 10Z" fill="#1F2937"/>
    <path d="M8 14C8 14 9.5 17 12 17C14.5 17 16 14 16 14H8Z" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1"/>
    <path d="M7 7L6 5" stroke="#81D4FA" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default GrinningFaceWithSweatIconComponent;
