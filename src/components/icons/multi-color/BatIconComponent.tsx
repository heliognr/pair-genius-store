
import React from 'react';
import type { SVGProps } from 'react';

const BatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2L2 9V15L12 22L22 15V9L12 2Z" fill="#424242"/>
    <path d="M12 2L5 9.5V14.5L12 22L19 14.5V9.5L12 2Z" fill="#616161"/>
    <path d="M12 10L5 15H19L12 10Z" fill="#757575"/>
    <circle cx="10" cy="7" r="0.5" fill="red"/> <circle cx="14" cy="7" r="0.5" fill="red"/>
  </svg>
);

export default BatIconComponent;
