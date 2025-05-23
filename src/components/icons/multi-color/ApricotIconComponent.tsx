
import React from 'react';
import type { SVGProps } from 'react';

const ApricotIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="6" fill="#FFB74D"/>
    <path d="M12 6C11 9 11 12 12 18C13 12 13 9 12 6Z" fill="#FFA726" />
    <path d="M12 6L13 3L14 5" stroke="#795548" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default ApricotIconComponent;
