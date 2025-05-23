
import React from 'react';
import type { SVGProps } from 'react';

const SquareIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#EF4444"/> {/* Red square */}
    <rect x="7" y="7" width="10" height="10" rx="1" fill="#F87171"/> {/* Lighter red inner square */}
  </svg>
);

export default SquareIconComponent;
