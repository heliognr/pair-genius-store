
import React from 'react';
import type { SVGProps } from 'react';

const FoxIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M4 10C4 5 8 3 12 3C16 3 20 5 20 10C20 12 18 14 16 15L12 21L8 15C6 14 4 12 4 10Z" fill="#FF9800"/> {/* Orange */}
    {/* Ears */}
    <path d="M7 5L4 2H7L7 5Z" fill="#212121"/> {/* Black tip left ear */}
    <path d="M17 5L20 2H17L17 5Z" fill="#212121"/> {/* Black tip right ear */}
    <path d="M7 5L4 2L6 6L7 5Z" fill="#FF9800"/>
    <path d="M17 5L20 2L18 6L17 5Z" fill="#FF9800"/>
    {/* Muzzle */}
    <path d="M10 14L12 16L14 14L12 12L10 14Z" fill="#FFFFFF"/> {/* White muzzle */}
    {/* Eyes */}
    <circle cx="10" cy="9" r="1" fill="#000000"/>
    <circle cx="14" cy="9" r="1" fill="#000000"/>
    {/* Nose */}
    <circle cx="12" cy="12.5" r="0.7" fill="#000000"/>
    {/* Tail (tip) */}
    <path d="M12 21L10 18H14L12 21Z" fill="#FFFFFF"/>
  </svg>
);

export default FoxIconComponent;
