
import React from 'react';
import type { SVGProps } from 'react';

const HourglassIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M6 2H18V6L12 12L6 6V2Z" fill="#BCAAA4"/>
    <path d="M6 22H18V18L12 12L6 18V22Z" fill="#A1887F"/>
    <path d="M6 6L12 12L6 18" fill="#E6EE9C"/> {/* Sand top */}
    <path d="M12 12L18 18V14L12 12Z" fill="#FFF9C4"/> {/* Sand bottom falling */}
  </svg>
);

export default HourglassIconComponent;
