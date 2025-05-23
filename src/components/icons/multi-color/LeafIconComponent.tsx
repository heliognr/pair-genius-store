
import React from 'react';
import type { SVGProps } from 'react';

const LeafIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.24 8.54C15.66 7.47 14.61 6.79 13.36 6.59C12.95 5.38 11.63 4.5 10 4.5C7.79 4.5 6 6.29 6 8.5C6 9.88 6.74 11.05 7.82 11.65C7.26 12.57 7 13.68 7 14.88C7 17.19 8.81 19 11.12 19C12.72 19 14.11 18.15 14.83 16.82C15.96 17.12 17.19 17 18.14 16.24C19.21 15.33 19.5 13.81 18.94 12.56C19.52 11.43 19.5 10.12 18.64 9.18C17.96 8.4 17.04 8.11 16.24 8.54Z" fill="#48BB78"/>
    <path d="M10 4.5C11.63 4.5 12.95 5.38 13.36 6.59C13.1 6.53 12.83 6.5 12.55 6.5C10.04 6.5 8 8.54 8 11.05C8 11.33 8.03 11.6 8.09 11.86C7.96 11.74 7.88 11.6 7.82 11.65C6.74 11.05 6 9.88 6 8.5C6 6.29 7.79 4.5 10 4.5Z" fill="#38A169"/>
  </svg>
);

export default LeafIconComponent;
