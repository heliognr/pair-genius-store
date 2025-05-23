
import React from 'react';
import type { SVGProps } from 'react';

const OwlIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="13" rx="7" ry="8" fill="#A1887F"/>
    <circle cx="9.5" cy="11" r="2.5" fill="#FFFDE7"/>
    <circle cx="14.5" cy="11" r="2.5" fill="#FFFDE7"/>
    <circle cx="9.5" cy="11" r="1" fill="#795548"/>
    <circle cx="14.5" cy="11" r="1" fill="#795548"/>
    <polygon points="11,14 13,14 12,16" fill="#FFB74D"/>
    <path d="M9 7L7 5M15 7L17 5" stroke="#795548" strokeWidth="1.5"/>
  </svg>
);

export default OwlIconComponent;
