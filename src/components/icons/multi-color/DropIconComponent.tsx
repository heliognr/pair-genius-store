
import React from 'react';
import type { SVGProps } from 'react';

const DropIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 22C12 22 6 15.705 6 10C6 5.589 8.696 2 12 2C15.304 2 18 5.589 18 10C18 15.705 12 22 12 22Z" fill="#2196F3"/> {/* Blue drop */}
    <path d="M12 2C11 4.5 10 7 10 10C10 12.5 11 15 12 16" fill="#90CAF9"/> {/* Highlight */}
  </svg>
);

export default DropIconComponent;
