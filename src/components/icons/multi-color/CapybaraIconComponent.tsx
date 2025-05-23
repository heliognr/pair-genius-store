
import React from 'react';
import type { SVGProps } from 'react';

const CapybaraIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="15" rx="7" ry="5" fill="#8D6E63"/>
    <rect x="10" y="10" width="4" height="3" rx="1" fill="#A1887F"/>
    <circle cx="10.5" cy="11" r="0.5" fill="black"/>
    <circle cx="13.5" cy="11" r="0.5" fill="black"/>
  </svg>
);

export default CapybaraIconComponent;
