
import React from 'react';
import type { SVGProps } from 'react';

const PapayaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="7" ry="9" fill="#FF8A65"/>
    <ellipse cx="12" cy="12" rx="3" ry="5" fill="#FFF3E0"/>
    <circle cx="12" cy="10" r="0.5" fill="#3E2723"/>
    <circle cx="12" cy="12" r="0.5" fill="#3E2723"/>
    <circle cx="12" cy="14" r="0.5" fill="#3E2723"/>
  </svg>
);

export default PapayaIconComponent;
