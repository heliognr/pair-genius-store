
import React from 'react';
import type { SVGProps } from 'react';

const BlackberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="9" r="2.5" fill="#3E2723"/>
    <circle cx="9.5" cy="12" r="2.5" fill="#263238"/>
    <circle cx="14.5" cy="12" r="2.5" fill="#263238"/>
    <circle cx="12" cy="15" r="2.5" fill="#3E2723"/>
    <path d="M11 6.5H13L12 3.5L11 6.5Z" fill="#4CAF50"/>
  </svg>
);

export default BlackberryIconComponent;
