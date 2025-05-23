
import React from 'react';
import type { SVGProps } from 'react';

const PentagonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2L22 9.2L17.6 21H6.4L2 9.2L12 2Z" fill="#14B8A6"/> {/* Teal pentagon */}
    <path d="M12 2L22 9.2L12 21L2 9.2L12 2Z" fill="#2DD4BF" fillOpacity="0.6"/> {/* Lighter teal highlight */}
  </svg>
);

export default PentagonIconComponent;
