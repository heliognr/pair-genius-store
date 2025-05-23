
import React from 'react';
import type { SVGProps } from 'react';

const PandaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="8" fill="#FFFFFF"/>
    <circle cx="8.5" cy="9.5" r="2.5" fill="#000000"/>
    <circle cx="15.5" cy="9.5" r="2.5" fill="#000000"/>
    <path d="M9 6.5A1.5 1.5 0 007.5 5A1.5 1.5 0 006 6.5V7.5H9V6.5Z" fill="#000000"/>
    <path d="M15 6.5A1.5 1.5 0 0116.5 5A1.5 1.5 0 0118 6.5V7.5H15V6.5Z" fill="#000000"/>
    <ellipse cx="12" cy="14" rx="1.5" ry="1" fill="#000000"/>
    <circle cx="8.5" cy="9.5" r="1" fill="#FFFFFF"/>
    <circle cx="15.5" cy="9.5" r="1" fill="#FFFFFF"/>
  </svg>
);

export default PandaIconComponent;
