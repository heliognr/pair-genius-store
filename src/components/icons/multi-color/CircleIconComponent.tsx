
import React from 'react';
import type { SVGProps } from 'react';

const CircleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="9" fill="#3B82F6"/> {/* Blue circle */}
    <circle cx="12" cy="12" r="6" fill="#60A5FA"/> {/* Lighter blue inner circle */}
  </svg>
);

export default CircleIconComponent;
