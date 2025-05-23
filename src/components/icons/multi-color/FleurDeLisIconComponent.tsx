
import React from 'react';
import type { SVGProps } from 'react';

const FleurDeLisIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2L9 10H15L12 2Z" fill="#FFC107"/>
    <path d="M12 10C8 10 6 14 6 17H18C18 14 16 10 12 10Z" fill="#FFB300"/>
    <path d="M6 17L4 22H8L6 17Z" fill="#FFA000"/>
    <path d="M18 17L16 22H20L18 17Z" fill="#FFA000"/>
    <rect x="10" y="17" width="4" height="3" fill="#FF8F00"/>
  </svg>
);

export default FleurDeLisIconComponent;
