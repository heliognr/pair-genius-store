
import React from 'react';
import type { SVGProps } from 'react';

const AngryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="10" fill="#EF4444"/> {/* Red face */}
    <path d="M7 9L9 11" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/> {/* Eyebrow left */}
    <path d="M17 9L15 11" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/> {/* Eyebrow right */}
    <circle cx="9" cy="10" r="1" fill="#1F2937"/> {/* Eye left (smaller) */}
    <circle cx="15" cy="10" r="1" fill="#1F2937"/> {/* Eye right (smaller) */}
    <path d="M8 16C8 16 9.5 13.5 12 13.5C14.5 13.5 16 16 16 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Frown */}
  </svg>
);

export default AngryIconComponent;
