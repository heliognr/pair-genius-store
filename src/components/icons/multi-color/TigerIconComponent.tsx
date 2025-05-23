
import React from 'react';
import type { SVGProps } from 'react';

const TigerIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Head */}
    <circle cx="12" cy="12" r="8" fill="#FFA726"/> {/* Orange head */}
    {/* Ears */}
    <path d="M7 8C7 6.34315 8.34315 5 10 5C10.5 5 11 5.5 10.5 6.5L7 8Z" fill="#212121"/> {/* Left ear */}
    <path d="M17 8C17 6.34315 15.6569 5 14 5C13.5 5 13 5.5 13.5 6.5L17 8Z" fill="#212121"/> {/* Right ear */}
    {/* Muzzle */}
    <ellipse cx="12" cy="14.5" rx="4" ry="2.5" fill="#FFFFFF"/> {/* White muzzle */}
    {/* Eyes */}
    <circle cx="10" cy="10.5" r="1" fill="#212121"/>
    <circle cx="14" cy="10.5" r="1" fill="#212121"/>
    {/* Nose */}
    <path d="M12 13.5L11.5 14.5H12.5L12 13.5Z" fill="#FF6F00"/> {/* Darker orange nose */}
    {/* Stripes */}
    <path d="M9 7L8 5" stroke="#212121" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M15 7L16 5" stroke="#212121" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M6 12L4 11" stroke="#212121" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M18 12L20 11" stroke="#212121" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M7 15L5 16" stroke="#212121" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M17 15L19 16" stroke="#212121" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export default TigerIconComponent;
