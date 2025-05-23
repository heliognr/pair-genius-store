
import React from 'react';
import type { SVGProps } from 'react';

const BeaverIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="6" ry="5" fill="#8D6E63"/>
    <circle cx="9" cy="10" r="2" fill="#A1887F"/>
    <circle cx="15" cy="10" r="2" fill="#A1887F"/>
    <rect x="10" y="16" width="4" height="2" fill="#FFFFFF"/>
    <rect x="10.5" y="15.5" width="1" height="1" fill="#5D4037"/>
    <rect x="12.5" y="15.5" width="1" height="1" fill="#5D4037"/>
    <path d="M16 18H8L12 21L16 18Z" fill="#795548"/>
  </svg>
);

export default BeaverIconComponent;
