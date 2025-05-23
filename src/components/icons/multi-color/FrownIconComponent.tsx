
import React from 'react';
import type { SVGProps } from 'react';

const FrownIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/> {/* Eye left */}
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/> {/* Eye right */}
    <path d="M8 16C8 16 9.5 13.5 12 13.5C14.5 13.5 16 16 16 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Frown */}
  </svg>
);

export default FrownIconComponent;
