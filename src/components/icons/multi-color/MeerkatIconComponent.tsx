
import React from 'react';
import type { SVGProps } from 'react';

const MeerkatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="10" y="8" width="4" height="12" rx="2" fill="#D2B48C"/>
    <circle cx="12" cy="6" r="3" fill="#DEB887"/>
    <circle cx="11" cy="5.5" r="0.5" fill="#000000"/>
    <circle cx="13" cy="5.5" r="0.5" fill="#000000"/>
    <path d="M12 7L11.5 7.5H12.5L12 7Z" fill="#A0522D"/>
  </svg>
);

export default MeerkatIconComponent;
