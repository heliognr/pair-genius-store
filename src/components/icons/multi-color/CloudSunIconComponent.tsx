
import React from 'react';
import type { SVGProps } from 'react';

const CloudSunIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="8" cy="8" r="3" fill="#FBBF24"/> {/* Sun part */}
    <path d="M8 5V3M8 13V11M5 8H3M13 8H11" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/> {/* Sun rays */}
    <path d="M16 14c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.29 0-.57.03-.84.09C14.46 4.43 12.93 3 11 3c-2.29 0-4.25 1.75-4.45 4.02C6.27 7.01 6 7.48 6 8c0 2.21 1.79 4 4 4h6Z" fill="#EFF6FF"/> {/* Cloud body - lighter blue */}
    <path d="M16 14c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.29 0-.57.03-.84.09C14.46 4.43 12.93 3 11 3c-2.29 0-4.25 1.75-4.45 4.02C6.27 7.01 6 7.48 6 8c0 2.21 1.79 4 4 4h6" fillOpacity="0.7" fill="#BFDBFE"/> {/* Cloud shadow/detail - darker blue */}
  </svg>
);

export default CloudSunIconComponent;
