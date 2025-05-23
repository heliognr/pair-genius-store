
import React from 'react';
import type { SVGProps } from 'react';

const DizzyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/> {/* Yellow face, slightly greenish for dizzy */}
    {/* X Eyes */}
    <line x1="7" y1="8" x2="11" y2="12" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <line x1="7" y1="12" x2="11" y2="8" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <line x1="13" y1="8" x2="17" y2="12" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <line x1="13" y1="12" x2="17" y2="8" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    {/* Wobbly Mouth */}
    <path d="M8 16C9 15 10 16 11 15C12 14 13 15 14 14C15 13 16 14 16 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Swirls */}
    <path d="M5 6C4 7 4 8 5 9" stroke="#4A5568" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <path d="M19 6C20 7 20 8 19 9" stroke="#4A5568" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default DizzyIconComponent;
