
import React from 'react';
import type { SVGProps } from 'react';

const OctagonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z" fill="#F97316"/> {/* Orange octagon */}
    <path d="M7.86 2L16.14 2L22 7.86L16.14 22H7.86L2 16.14Z" fill="#FB923C" fillOpacity="0.7"/> {/* Lighter orange highlight */}
  </svg>
);

export default OctagonIconComponent;
