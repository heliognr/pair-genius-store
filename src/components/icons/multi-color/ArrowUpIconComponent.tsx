
import React from 'react';
import type { SVGProps } from 'react';

const ArrowUpIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <polygon points="12 2 22 12 17 12 17 22 7 22 7 12 2 12 12 2" fill="#4CAF50"/> {/* Green arrow */}
    <polygon points="12 2 18 12 15 12 15 18 9 18 9 12 6 12 12 2" fill="#81C784"/> {/* Lighter green highlight */}
  </svg>
);

export default ArrowUpIconComponent;
