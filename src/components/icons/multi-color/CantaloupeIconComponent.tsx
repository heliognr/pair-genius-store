
import React from 'react';
import type { SVGProps } from 'react';

const CantaloupeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="7" fill="#FFCC80"/>
    <path d="M12 5C9 5 6 8 6 12C6 16 9 19 12 19C15 19 18 16 18 12C18 8 15 5 12 5Z" stroke="#FFE0B2" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="4" fill="#FFB74D"/>
  </svg>
);

export default CantaloupeIconComponent;
