
import React from 'react';
import type { SVGProps } from 'react';

const HummingbirdIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M10 10L5 7L10 4L12 8L10 10Z" fill="#4CAF50"/>
    <path d="M12 8L15 5L18 7L14 10L12 8Z" fill="#81C784"/>
    <path d="M10 10H14L12 15L10 10Z" fill="#F44336"/>
    <circle cx="12" cy="7" r="0.5" fill="black"/>
  </svg>
);

export default HummingbirdIconComponent;
