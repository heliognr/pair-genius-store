
import React from 'react';
import type { SVGProps } from 'react';

const WinkIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="none"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/> {/* Yellow face */}
    {/* Open Eye */}
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    {/* Winking Eye */}
    <path d="M7 10C7 10 8 9 9 9C10 9 11 10 11 10" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    {/* Smile */}
    <path d="M8 14C8 14 9.5 16.5 12 16.5C14.5 16.5 16 14 16 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default WinkIconComponent;
