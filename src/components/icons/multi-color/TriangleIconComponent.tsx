
import React from 'react';
import type { SVGProps } from 'react';

const TriangleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2L2 20H22L12 2Z" fill="#10B981"/> {/* Green triangle */}
    <path d="M12 2L5 16H19L12 2Z" fill="#34D399"/> {/* Lighter green inner triangle */}
  </svg>
);

export default TriangleIconComponent;
