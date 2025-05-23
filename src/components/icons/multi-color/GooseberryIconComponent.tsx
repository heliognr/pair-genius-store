
import React from 'react';
import type { SVGProps } from 'react';

const GooseberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="5" fill="#AED581"/>
    <line x1="9" y1="12" x2="15" y2="12" stroke="#8BC34A" strokeWidth="1"/>
    <line x1="12" y1="9" x2="12" y2="15" stroke="#8BC34A" strokeWidth="1"/>
    <path d="M12 7L11.5 5L12.5 6L12 7Z" fill="#689F38"/>
  </svg>
);

export default GooseberryIconComponent;
