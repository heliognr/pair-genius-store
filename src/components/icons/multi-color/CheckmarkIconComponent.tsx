
import React from 'react';
import type { SVGProps } from 'react';

const CheckmarkIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#4CAF50"/> {/* Green checkmark */}
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19Z" fill="#81C784"/> {/* Lighter green part */}
  </svg>
);

export default CheckmarkIconComponent;
