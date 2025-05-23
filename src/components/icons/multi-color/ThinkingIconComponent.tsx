
import React from 'react';
import type { SVGProps } from 'react';

const ThinkingIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Eyes */}
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    {/* Mouth */}
    <line x1="10" y1="15" x2="14" y2="15" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    {/* Hand on chin */}
    <path d="M8 17C8 17 7 19 9 19C10.5 19 10 17 10 17" fill="#FDBA74" stroke="#E4A764" strokeWidth="1"/>
    {/* Thought bubble */}
    <circle cx="6" cy="5" r="1.5" fill="#FFFFFF" stroke="#BDBDBD" strokeWidth="0.5"/>
    <circle cx="4" cy="7" r="1" fill="#FFFFFF" stroke="#BDBDBD" strokeWidth="0.5"/>
  </svg>
);

export default ThinkingIconComponent;
