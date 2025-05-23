
import React from 'react';
import type { SVGProps } from 'react';

const PeachIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="13" r="7" fill="#FFCC80"/> {/* Light orange peach body */}
    <path d="M12 6C10.5 9 10.5 12 12 20C13.5 12 13.5 9 12 6Z" fill="#FFB74D" /> {/* Indent */}
    <path d="M10 10C8.5 11 7 13 7 15" stroke="#E57373" strokeWidth="1.5" fill="none" strokeLinecap="round"/> {/* Reddish blush */}
    {/* Stem */}
    <path d="M12 6L13 3L14 5" stroke="#795548" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default PeachIconComponent;
