
import React from 'react';
import type { SVGProps } from 'react';

const LaughIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M7 10C7 9.44772 7.44772 9 8 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H8C7.44772 11 7 10.5523 7 10Z" fill="#1F2937"/> {/* Eye left (squint) */}
    <path d="M13 10C13 9.44772 13.4477 9 14 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H14C13.4477 11 13 10.5523 13 10Z" fill="#1F2937"/> {/* Eye right (squint) */}
    <path d="M8 14C8 14 9.5 17.5 12 17.5C14.5 17.5 16 14 16 14H8Z" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> {/* Laughing mouth */}
    <path d="M9 8L7 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/> {/* Tear 1 */}
    <path d="M15 8L17 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/> {/* Tear 2 */}
  </svg>
);

export default LaughIconComponent;
