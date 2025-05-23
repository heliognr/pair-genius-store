
import React from 'react';
import type { SVGProps } from 'react';

const FireIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2C12 2 8 7.5 8 11C8 15.5 12 22 12 22C12 22 16 15.5 16 11C16 7.5 12 2 12 2Z" fill="#FF5722"/> {/* Outer flame - deep orange */}
    <path d="M12 4.5C12 4.5 10 8.5 10 11C10 13.5 12 18 12 18C12 18 14 13.5 14 11C14 8.5 12 4.5 12 4.5Z" fill="#FF9800"/> {/* Middle flame - orange */}
    <path d="M12 7C12 7 11 9.5 11 11C11 12.5 12 15 12 15C12 15 13 12.5 13 11C13 9.5 12 7 12 7Z" fill="#FFC107"/> {/* Inner flame - yellow */}
  </svg>
);

export default FireIconComponent;
