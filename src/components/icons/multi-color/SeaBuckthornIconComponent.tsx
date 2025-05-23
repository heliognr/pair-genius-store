
import React from 'react';
import type { SVGProps } from 'react';

const SeaBuckthornIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="3" ry="4.5" fill="#FF8F00"/>
    <path d="M12 7.5L11.8 5.5L12.2 6.5L12 7.5Z" fill="#FFB300"/>
  </svg>
);

export default SeaBuckthornIconComponent;
