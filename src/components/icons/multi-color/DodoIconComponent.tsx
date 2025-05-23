
import React from 'react';
import type { SVGProps } from 'react';

const DodoIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="7" ry="6" fill="#B0BEC5"/>
    <circle cx="12" cy="8" r="3" fill="#CFD8DC"/>
    <path d="M12 11L14 10L15 11" fill="#FFB74D"/>
    <circle cx="11" cy="7.5" r="0.5" fill="black"/>
    <path d="M9 18L7 20M15 18L17 20" stroke="#78909C" strokeWidth="1.5"/>
  </svg>
);

export default DodoIconComponent;
