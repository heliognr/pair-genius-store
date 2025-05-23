
import React from 'react';
import type { SVGProps } from 'react';

const CherryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11Z" fill="#E53E3E"/> {/* Main cherry */}
    <path d="M15 11C15 8.79086 16.7909 7 19 7C21.2091 7 23 8.79086 23 11C23 13.2091 21.2091 15 19 15C16.7909 15 15 13.2091 15 11Z" fill="#C53030"/> {/* Second cherry, slightly darker */}
    <path d="M12 7V4M19 7V4" stroke="#48BB78" strokeWidth="1.5" strokeLinecap="round"/> {/* Stems */}
    <path d="M6 4H12L9 1Z" fill="#38A169"/> {/* Leaf */}
  </svg>
);

export default CherryIconComponent;
