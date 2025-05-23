
import React from 'react';
import type { SVGProps } from 'react';

const HeartIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#EF4444"/> {/* Red heart */}
    <path d="M12 5.09C11.09 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 9.99 2.6 11.37 3.55 12.63L12 21.35L13.45 20.03C14.04 19.49 14.57 18.9 15.03 18.27" fill="#F87171"/> {/* Lighter red highlight */}
  </svg>
);

export default HeartIconComponent;
