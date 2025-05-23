
import React from 'react';
import type { SVGProps } from 'react';

const ChameleonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 15C5 10 10 8 15 10L18 7L20 10L15 18H8L5 15Z" fill="#8BC34A"/>
    <circle cx="16" cy="9" r="1.5" fill="#FFEB3B"/>
    <circle cx="16" cy="9" r="0.5" fill="#E65100"/>
    <path d="M5 15C3 16 2 18 4 19C6 20 7 17 5 15Z" fill="#689F38"/>
  </svg>
);

export default ChameleonIconComponent;
