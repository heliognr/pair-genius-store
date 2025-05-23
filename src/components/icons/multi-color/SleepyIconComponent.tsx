
import React from 'react';
import type { SVGProps } from 'react';

const SleepyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Closed Eyes */}
    <path d="M8 11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Mouth */}
    <ellipse cx="12" cy="16" rx="2" ry="1" fill="#1F2937" opacity="0.8"/>
    {/* Zzz */}
    <path d="M6 6L8 6L6 8L8 8" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 9L7 9L5 11L7 11" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
  </svg>
);

export default SleepyIconComponent;
