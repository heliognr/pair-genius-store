
import React from 'react';
import type { SVGProps } from 'react';

const TapirIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="8" ry="5" fill="#616161"/>
    <path d="M6 12C6 10 8 8 10 8H14C16 8 18 10 18 12" fill="#757575"/>
    <rect x="5" y="10" width="3" height="2" fill="#9E9E9E"/>
    <circle cx="8" cy="11" r="0.5" fill="black"/>
  </svg>
);

export default TapirIconComponent;
