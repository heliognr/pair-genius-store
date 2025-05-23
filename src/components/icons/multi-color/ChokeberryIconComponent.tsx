
import React from 'react';
import type { SVGProps } from 'react';

const ChokeberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="3.5" fill="#263238"/>
    <path d="M12 8.5L11.8 6.5L12.2 7.5L12 8.5Z" fill="#546E7A"/>
  </svg>
);

export default ChokeberryIconComponent;
