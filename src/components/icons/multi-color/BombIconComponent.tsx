
import React from 'react';
import type { SVGProps } from 'react';

const BombIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="14" r="7" fill="#424242"/>
    <rect x="11" y="3" width="2" height="5" fill="#757575"/>
    <path d="M12 3L14 5L12 6L10 5L12 3Z" fill="#FFEB3B"/> {/* Spark */}
    <path d="M13 2L15 4M11 2L9 4" stroke="#FFC107" strokeWidth="1"/>
  </svg>
);

export default BombIconComponent;
