
import React from 'react';
import type { SVGProps } from 'react';

const PlatypusIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="15" rx="7" ry="4" fill="#8D6E63"/>
    <ellipse cx="7" cy="14" rx="3" ry="2" fill="#A1887F"/>
    <rect x="4" y="13" width="3" height="1" fill="#795548"/>
    <circle cx="10" cy="13" r="0.5" fill="black"/>
    <path d="M15 17L19 19L17 21" stroke="#795548" strokeWidth="1" fill="none"/>
  </svg>
);

export default PlatypusIconComponent;
