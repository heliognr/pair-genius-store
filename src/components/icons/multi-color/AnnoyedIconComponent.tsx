
import React from 'react';
import type { SVGProps } from 'react';

const AnnoyedIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M8 15H16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/> {/* Straight mouth */}
    <path d="M11 7L9 5.5" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/> {/* Annoyed tick mark 1 */}
    <path d="M13 7L15 5.5" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/> {/* Annoyed tick mark 2 */}
    <path d="M10 7.5L10.5 5" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default AnnoyedIconComponent;
