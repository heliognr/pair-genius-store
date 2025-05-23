
import React from 'react';
import type { SVGProps } from 'react';

const CheetahIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="8" ry="6" fill="#FFD54F"/>
    <circle cx="12" cy="9" r="3" fill="#FFE082"/>
    <circle cx="10" cy="8" r="0.5" fill="black"/>
    <circle cx="14" cy="8" r="0.5" fill="black"/>
    <path d="M12 10L11.5 11H12.5L12 10Z" fill="#795548"/>
    <circle cx="9" cy="13" r="1" fill="black"/>
    <circle cx="15" cy="13" r="1" fill="black"/>
    <circle cx="11" cy="15" r="1" fill="black"/>
    <circle cx="13" cy="15" r="1" fill="black"/>
  </svg>
);

export default CheetahIconComponent;
