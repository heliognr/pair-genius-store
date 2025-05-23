
import React from 'react';
import type { SVGProps } from 'react';

const ArrowDownIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <polygon points="12 22 22 12 17 12 17 2 7 2 7 12 2 12 12 22" fill="#F44336"/> {/* Red arrow */}
    <polygon points="12 22 18 12 15 12 15 6 9 6 9 12 6 12 12 22" fill="#E57373"/> {/* Lighter red highlight */}
  </svg>
);

export default ArrowDownIconComponent;
