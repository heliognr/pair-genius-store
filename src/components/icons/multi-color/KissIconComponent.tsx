
import React from 'react';
import type { SVGProps } from 'react';

const KissIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Kissing Mouth */}
    <path d="M10 15C10 14.5 10.5 14 11 14H13C13.5 14 14 14.5 14 15C14 15.5 13.5 16 13 16H11C10.5 16 10 15.5 10 15Z" fill="#EF4444"/>
    {/* Heart */}
    <path d="M17 8L18 7L19 8" fill="#EF4444" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default KissIconComponent;
