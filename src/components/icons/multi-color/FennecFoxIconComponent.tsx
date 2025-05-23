
import React from 'react';
import type { SVGProps } from 'react';

const FennecFoxIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 10C9 10 7 12 7 15H17C17 12 15 10 12 10Z" fill="#FFE0B2"/>
    <path d="M9 4L5 1L9 10H15L19 1L15 4H9Z" fill="#FFCC80"/>
    <circle cx="10" cy="12" r="0.5" fill="black"/>
    <circle cx="14" cy="12" r="0.5" fill="black"/>
  </svg>
);

export default FennecFoxIconComponent;
