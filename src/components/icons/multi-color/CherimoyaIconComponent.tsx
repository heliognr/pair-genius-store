
import React from 'react';
import type { SVGProps } from 'react';

const CherimoyaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C8 2 5 6 5 12C5 17 8 22 12 22C16 22 19 17 19 12C19 6 16 2 12 2Z" fill="#C8E6C9"/>
    <path d="M12 4C9.5 4 7 7 7 12C7 16 9.5 20 12 20C14.5 20 17 16 17 12C17 7 14.5 4 12 4Z" fill="#E8F5E9"/>
    <path d="M10 7L9 5H11L10 7Z" fill="#558B2F"/>
  </svg>
);

export default CherimoyaIconComponent;
