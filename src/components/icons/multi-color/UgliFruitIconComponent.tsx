
import React from 'react';
import type { SVGProps } from 'react';

const UgliFruitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="7" ry="6" fill="#F57C00"/>
    <ellipse cx="12" cy="12" rx="5" ry="4" fill="#FF9800"/>
    <path d="M10 9L9 7" stroke="#E65100" strokeWidth="0.5"/>
    <path d="M14 9L15 7" stroke="#E65100" strokeWidth="0.5"/>
    <path d="M11 15L10 17" stroke="#E65100" strokeWidth="0.5"/>
    <path d="M13 15L14 17" stroke="#E65100" strokeWidth="0.5"/>
  </svg>
);

export default UgliFruitIconComponent;
