
import React from 'react';
import type { SVGProps } from 'react';

const CarrotIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 22L6 12L12 2L18 12L12 22Z" fill="#F59E0B"/> {/* Carrot body */}
    <path d="M12 2L10 6H14L12 2Z" fill="#38A169"/> {/* Leaf top */}
    <path d="M10 6L8 8H12L10 6Z" fill="#48BB78"/> {/* Leaf middle */}
    <path d="M14 6L12 8H16L14 6Z" fill="#48BB78"/> {/* Leaf middle */}
  </svg>
);

export default CarrotIconComponent;
