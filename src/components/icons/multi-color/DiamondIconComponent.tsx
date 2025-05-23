
import React from 'react';
import type { SVGProps } from 'react';

const DiamondIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <polygon points="12 2 22 12 12 22 2 12 12 2" fill="#03A9F4"/> {/* Light blue diamond */}
    <polygon points="12 2 17 12 12 22 7 12 12 2" fill="#29B6F6" opacity="0.7"/> {/* Inner highlight */}
  </svg>
);

export default DiamondIconComponent;
