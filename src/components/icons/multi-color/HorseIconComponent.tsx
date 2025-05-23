
import React from 'react';
import type { SVGProps } from 'react';

const HorseIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Head and Neck */}
    <path d="M6 18C6 12 9 6 15 4C17 3 19 4 20 6L18 10C17 9 15 8 13 9C10 10 8 14 8 18H6Z" fill="#A1887F"/> {/* Brown */}
    {/* Mane */}
    <path d="M15 4C14 6 13 8 13 10L11 9C12 7 13 5 15 4Z" fill="#6D4C41"/> {/* Darker brown mane */}
    {/* Ear */}
    <path d="M17 3L16 1L18 2L17 3Z" fill="#795548"/> {/* Ear */}
    {/* Eye */}
    <circle cx="16" cy="6.5" r="0.8" fill="#FFFFFF"/>
    <circle cx="16" cy="6.5" r="0.4" fill="#000000"/>
    {/* Muzzle */}
    <ellipse cx="7" cy="17.5" rx="2" ry="1.5" fill="#D7CCC8"/> {/* Light muzzle */}
  </svg>
);

export default HorseIconComponent;
