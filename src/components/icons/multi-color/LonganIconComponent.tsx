
import React from 'react';
import type { SVGProps } from 'react';

const LonganIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="6" fill="#FBC02D"/>
    <circle cx="12" cy="12" r="2.5" fill="#5D4037"/>
    <path d="M12 6L11.5 3L13 4" stroke="#795548" strokeWidth="1" fill="none"/>
  </svg>
);

export default LonganIconComponent;
