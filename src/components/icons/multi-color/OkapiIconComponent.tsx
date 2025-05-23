
import React from 'react';
import type { SVGProps } from 'react';

const OkapiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M6 18C6 12 9 6 15 4C17 3 19 4 20 6L18 10C17 9 15 8 13 9C10 10 8 14 8 18H6Z" fill="#795548"/>
    <path d="M7 17H5V15H7V17ZM7 13H5V11H7V13Z" fill="#FFFFFF"/>
    <path d="M17 17H19V15H17V17ZM17 13H19V11H17V13Z" fill="#FFFFFF"/>
    <circle cx="16" cy="6.5" r="0.8" fill="black"/>
  </svg>
);

export default OkapiIconComponent;
