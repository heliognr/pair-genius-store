
import React from 'react';
import type { SVGProps } from 'react';

const FigIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Fig Body */}
    <path d="M12 2C9 2 6 5 6 10C6 16 10 22 12 22C14 22 18 16 18 10C18 5 15 2 12 2Z" fill="#5D4037"/> {/* Dark purple/brown body */}
    {/* Inner part */}
    <path d="M12 4C10 4 8 6.5 8 10C8 14 10 19 12 19C14 19 16 14 16 10C16 6.5 14 4 12 4Z" fill="#FF7043"/> {/* Pink/red inner part */}
    {/* Stem */}
    <rect x="11" y="1" width="2" height="3" fill="#795548"/>
  </svg>
);

export default FigIconComponent;
