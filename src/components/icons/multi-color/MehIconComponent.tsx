
import React from 'react';
import type { SVGProps } from 'react';

const MehIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <line x1="8" y1="15" x2="16" y2="15" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/> {/* Meh mouth */}
  </svg>
);

export default MehIconComponent;
