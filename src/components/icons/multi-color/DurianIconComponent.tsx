
import React from 'react';
import type { SVGProps } from 'react';

const DurianIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="7" ry="8" fill="#D4E157"/>
    <polygon points="12 4 10 7 14 7" fill="#8BC34A"/>
    <polygon points="7 8 5 10 8 10" fill="#8BC34A"/>
    <polygon points="17 8 19 10 16 10" fill="#8BC34A"/>
    <polygon points="7 16 5 14 8 14" fill="#8BC34A"/>
    <polygon points="17 16 19 14 16 14" fill="#8BC34A"/>
  </svg>
);

export default DurianIconComponent;
