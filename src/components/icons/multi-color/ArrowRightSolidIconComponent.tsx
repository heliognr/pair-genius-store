
import React from 'react';
import type { SVGProps } from 'react';
// Using solid arrow instead of adapting line arrow
const ArrowRightSolidIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <polygon points="5 11 15 11 15 7 20 12 15 17 15 13 5 13 5 11" fill="#4CAF50"/>
  </svg>
);

export default ArrowRightSolidIconComponent;
