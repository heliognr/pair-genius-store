
import React from 'react';
import type { SVGProps } from 'react';

const StarStruckIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Star Eyes */}
    <path d="M9 11.5L7.5 13L7 11L6 11.5L7.5 10L7 8L8.5 9L9 7.5L9.5 9L11 8L10.5 10L12 11.5L10.5 11L9 11.5Z" fill="#FFEB3B" stroke="#F57F17" strokeWidth="0.5"/>
    <path d="M15 11.5L13.5 13L13 11L12 11.5L13.5 10L13 8L14.5 9L15 7.5L15.5 9L17 8L16.5 10L18 11.5L16.5 11L15 11.5Z" fill="#FFEB3B" stroke="#F57F17" strokeWidth="0.5"/>
    {/* Open Mouth */}
    <ellipse cx="12" cy="16" rx="3" ry="1.5" fill="#1F2937"/>
  </svg>
);

export default StarStruckIconComponent;
