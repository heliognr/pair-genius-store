
import React from 'react';
import type { SVGProps } from 'react';

const DeerIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <ellipse cx="12" cy="14" rx="4" ry="5" fill="#A1887F"/> {/* Brown head */}
    {/* Ears */}
    <path d="M8 11L6 8L9 9L8 11Z" fill="#D2B48C"/> {/* Tan ear */}
    <path d="M16 11L18 8L15 9L16 11Z" fill="#D2B48C"/> {/* Tan ear */}
    {/* Antlers */}
    <path d="M8 8L5 4M5 4L3 6M5 4L7 2" stroke="#795548" strokeWidth="1.5" fill="none" strokeLinecap="round"/> {/* Left antler */}
    <path d="M16 8L19 4M19 4L21 6M19 4L17 2" stroke="#795548" strokeWidth="1.5" fill="none" strokeLinecap="round"/> {/* Right antler */}
    {/* Eyes */}
    <circle cx="10" cy="13" r="0.8" fill="#000000"/>
    <circle cx="14" cy="13" r="0.8" fill="#000000"/>
    {/* Nose */}
    <ellipse cx="12" cy="16.5" rx="1.5" ry="1" fill="#5D4037"/> {/* Dark brown nose */}
  </svg>
);

export default DeerIconComponent;
