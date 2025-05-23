
import React from 'react';
import type { SVGProps } from 'react';

const PassionFruitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="7" fill="#7E57C2"/>
    <circle cx="12" cy="12" r="4" fill="#FFF59D"/>
    <circle cx="11" cy="11" r="0.5" fill="#3E2723"/>
    <circle cx="13" cy="11" r="0.5" fill="#3E2723"/>
    <circle cx="11" cy="13" r="0.5" fill="#3E2723"/>
    <circle cx="13" cy="13" r="0.5" fill="#3E2723"/>
  </svg>
);

export default PassionFruitIconComponent;
