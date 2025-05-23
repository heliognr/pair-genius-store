
import React from 'react';
import type { SVGProps } from 'react';

const SpadeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2C9.17 2 6.92 3.84 6.28 6.5C4.05 6.88 2 9.75 2 12.31C2 15.38 5.62 18.38 11 21.91L12 23L13 21.91C18.38 18.38 22 15.38 22 12.31C22 9.75 19.95 6.88 17.72 6.5C17.08 3.84 14.83 2 12 2Z" fill="#424242"/> {/* Black spade */}
    <path d="M12 2C11 4 10.5 6 10.5 7.5C10.5 9.5 11.5 11 12 11C12.5 11 13.5 9.5 13.5 7.5C13.5 6 13 4 12 2Z" fill="#616161"/> {/* Highlight */}
  </svg>
);

export default SpadeIconComponent;
