
import React from 'react';
import type { SVGProps } from 'react';

const HuckleberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="4" fill="#303F9F"/>
    <circle cx="12" cy="12" r="2" fill="#5C6BC0"/>
    <path d="M12 8L11.5 6L12.5 7" stroke="#C5CAE9" strokeWidth="0.5" fill="none"/>
  </svg>
);

export default HuckleberryIconComponent;
