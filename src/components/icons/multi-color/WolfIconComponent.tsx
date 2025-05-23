
import React from 'react';
import type { SVGProps } from 'react';

const WolfIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M5 9C5 4 8 2 12 2C16 2 19 4 19 9C19 11 17.5 13 16 14L12 20L8 14C6.5 13 5 11 5 9Z" fill="#78909C"/> {/* Grey blue */}
    {/* Ears */}
    <path d="M8 4L5 1H8L8 4Z" fill="#607D8B"/> {/* Darker ear */}
    <path d="M16 4L19 1H16L16 4Z" fill="#607D8B"/> {/* Darker ear */}
    {/* Muzzle */}
    <path d="M10 13L12 15L14 13L12 11L10 13Z" fill="#CFD8DC"/> {/* Lighter grey muzzle */}
    {/* Eyes */}
    <circle cx="10" cy="8" r="1" fill="#FFEB3B"/> {/* Yellow eyes */}
    <circle cx="14" cy="8" r="1" fill="#FFEB3B"/>
    {/* Nose */}
    <circle cx="12" cy="11.5" r="0.7" fill="#263238"/>
  </svg>
);

export default WolfIconComponent;
