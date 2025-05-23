
import React from 'react';
import type { SVGProps } from 'react';

const PenguinIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="13" rx="6" ry="8" fill="#212121"/>
    <ellipse cx="12" cy="13" rx="4" ry="6" fill="#FFFFFF"/>
    <circle cx="10.5" cy="10" r="0.7" fill="black"/>
    <circle cx="13.5" cy="10" r="0.7" fill="black"/>
    <polygon points="11,13 13,13 12,15" fill="#FF9800"/>
    <path d="M7 15L5 18L8 17L7 15Z" fill="#FF9800"/>
    <path d="M17 15L19 18L16 17L17 15Z" fill="#FF9800"/>
  </svg>
);

export default PenguinIconComponent;
