
import React from 'react';
import type { SVGProps } from 'react';

const HandIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M18 8C18 5.79086 16.2091 4 14 4C11.7909 4 10 5.79086 10 8V14H6C4.89543 14 4 14.8954 4 16V20H20V11C20 9.34315 18.6569 8 17 8H18Z" fill="#FDBA74"/> {/* Palm and fingers - light skin */}
    <path d="M10 8V14M12 8V14M14 8V14M16 8V14" stroke="#FED7AA" strokeWidth="1"/> {/* Finger lines - very light skin */}
    <path d="M10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8" fill="#FED7AA"/> {/* Top of fingers */}
    <path d="M6 14H4" stroke="#FED7AA" strokeWidth="1.5"/> {/* Thumb part */}
  </svg>
);

export default HandIconComponent;
