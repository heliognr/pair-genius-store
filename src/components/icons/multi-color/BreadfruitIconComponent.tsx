
import React from 'react';
import type { SVGProps } from 'react';

const BreadfruitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="8" fill="#AED581"/>
    <circle cx="10" cy="10" r="1" fill="#8BC34A"/>
    <circle cx="14" cy="10" r="1" fill="#8BC34A"/>
    <circle cx="12" cy="14" r="1" fill="#8BC34A"/>
    <circle cx="9" cy="13" r="1" fill="#8BC34A"/>
    <circle cx="15" cy="13" r="1" fill="#8BC34A"/>
  </svg>
);

export default BreadfruitIconComponent;
