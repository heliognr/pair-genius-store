
import React from 'react';
import type { SVGProps } from 'react';

const TargetSolidIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="8" fill="#EF5350"/>
    <circle cx="12" cy="12" r="5" fill="#FFFFFF"/>
    <circle cx="12" cy="12" r="2" fill="#EF5350"/>
  </svg>
);

export default TargetSolidIconComponent;
