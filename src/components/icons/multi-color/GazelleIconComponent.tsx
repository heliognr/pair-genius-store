
import React from 'react';
import type { SVGProps } from 'react';

const GazelleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M15 18V10C15 7 12 5 9 6L7 4M9 6L12 3" stroke="#D2B48C" strokeWidth="1.5" fill="none"/>
    <ellipse cx="10" cy="14" rx="5" ry="3" fill="#DEB887"/>
    <circle cx="8" cy="8" r="1" fill="black"/>
  </svg>
);

export default GazelleIconComponent;
