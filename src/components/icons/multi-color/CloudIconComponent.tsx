
import React from 'react';
import type { SVGProps } from 'react';

const CloudIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96z" fill="#E3F2FD"/> {/* Light blue cloud */}
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C5.13 8.03 4.92 8.01 4.7 8C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h1V19H6c-2.76 0-5-2.24-5-5c0-2.4 1.75-4.42 4.07-4.86l.58-.09l.16-.56C6.6 5.64 9.11 4 12 4c3.64 0 6.67 2.59 7.35 6.04l.16.82l.86.05C22.05 11.22 24 13.36 24 16c0 .2-.01.39-.04.58C23.21 15.41 21.88 15 20.35 15H13c-2.76 0-5 2.24-5 5h1.5c.61-2.39 2.72-4.22 5.15-4.58" fill="#BBDEFB" opacity="0.7"/> {/* Shadow/darker part */}
  </svg>
);

export default CloudIconComponent;
