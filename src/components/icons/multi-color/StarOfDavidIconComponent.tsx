
import React from 'react';
import type { SVGProps } from 'react';

const StarOfDavidIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <polygon points="12 2 15.5 8 12 14 8.5 8" fill="#2196F3"/>
    <polygon points="12 22 8.5 16 12 10 15.5 16" fill="#90CAF9"/>
  </svg>
);

export default StarOfDavidIconComponent;
