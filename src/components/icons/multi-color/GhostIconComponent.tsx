
import React from 'react';
import type { SVGProps } from 'react';

const GhostIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 20V10C5 6 8 3 12 3C16 3 19 6 19 10V20L16 17L12 20L8 17L5 20Z" fill="#E3F2FD"/>
    <circle cx="10" cy="10" r="1.5" fill="#263238"/>
    <circle cx="14" cy="10" r="1.5" fill="#263238"/>
    <path d="M10 14H14V15H10V14Z" fill="#263238"/>
  </svg>
);

export default GhostIconComponent;
