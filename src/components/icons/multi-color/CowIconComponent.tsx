
import React from 'react';
import type { SVGProps } from 'react';

const CowIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <ellipse cx="12" cy="12" rx="7" ry="6" fill="#FFFFFF"/> {/* White head */}
    {/* Spots */}
    <ellipse cx="9" cy="10" rx="2" ry="1.5" fill="#000000"/> {/* Black spot */}
    <ellipse cx="15" cy="13" rx="2.5" ry="1.8" fill="#000000"/> {/* Black spot */}
    {/* Ears */}
    <path d="M6 10C5 8 7 7 8 8L6 10Z" fill="#FFCDD2"/> {/* Pink inner ear */}
    <path d="M18 10C19 8 17 7 16 8L18 10Z" fill="#FFCDD2"/> {/* Pink inner ear */}
    <path d="M6 10C4.5 7.5 7.5 6 8 8L6 10Z" fill="#FFFFFF"/>
    <path d="M18 10C19.5 7.5 16.5 6 16 8L18 10Z" fill="#FFFFFF"/>
    {/* Muzzle */}
    <ellipse cx="12" cy="15.5" rx="3" ry="2" fill="#FFEBEE"/> {/* Pinkish muzzle */}
    {/* Nostrils */}
    <circle cx="11" cy="15.5" r="0.5" fill="#F48FB1"/>
    <circle cx="13" cy="15.5" r="0.5" fill="#F48FB1"/>
    {/* Eyes */}
    <circle cx="9.5" cy="12.5" r="0.7" fill="#000000"/>
    <circle cx="14.5" cy="12.5" r="0.7" fill="#000000"/>
  </svg>
);

export default CowIconComponent;
