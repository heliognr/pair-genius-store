
import React from 'react';
import type { SVGProps } from 'react';

const ArrowLeftSolidIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <polygon points="19 11 9 11 9 7 4 12 9 17 9 13 19 13 19 11" fill="#F44336"/>
  </svg>
);

export default ArrowLeftSolidIconComponent;
