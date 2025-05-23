
import React from 'react';
import type { SVGProps } from 'react';

const RaspberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="10" r="3" fill="#EC407A"/>
    <circle cx="10" cy="13" r="3" fill="#E91E63"/>
    <circle cx="14" cy="13" r="3" fill="#E91E63"/>
    <path d="M11 7H13L12 4L11 7Z" fill="#4CAF50"/>
  </svg>
);

export default RaspberryIconComponent;
