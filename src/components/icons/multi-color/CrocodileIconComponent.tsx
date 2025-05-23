
import React from 'react';
import type { SVGProps } from 'react';

const CrocodileIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M3 12H21V15H3V12Z" fill="#689F38"/>
    <path d="M4 10H8L7 12L4 10Z" fill="#33691E"/>
    <path d="M10 10H14L13 12L10 10Z" fill="#33691E"/>
    <path d="M16 10H20L19 12L16 10Z" fill="#33691E"/>
    <path d="M4 15L6 18H18L20 15" fill="#558B2F"/>
    <circle cx="7" cy="10.5" r="1" fill="yellow"/> <circle cx="17" cy="10.5" r="1" fill="yellow"/>
  </svg>
);

export default CrocodileIconComponent;
