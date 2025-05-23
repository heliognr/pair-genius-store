
import React from 'react';
import type { SVGProps } from 'react';

const YinYangIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
    <path d="M12 3A9 9 0 0012 21A4.5 4.5 0 0012 12A4.5 4.5 0 0112 3Z" fill="#000000"/>
    <circle cx="12" cy="7.5" r="1.5" fill="#FFFFFF"/>
    <circle cx="12" cy="16.5" r="1.5" fill="#000000"/>
  </svg>
);

export default YinYangIconComponent;
