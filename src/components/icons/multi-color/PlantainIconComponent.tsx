
import React from 'react';
import type { SVGProps } from 'react';

const PlantainIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M6 18C6 12 10 8 15 8C18 8 19 10 19 12C19 14 18 16 15 16C10 16 6 12 6 18Z" fill="#CDDC39"/>
    <path d="M7 17C7 13 10.5 9.5 15 9.5C17.5 9.5 18 11 18 12.5C18 13.5 17.5 15 15 15C10.5 15 7 11.5 7 17Z" fill="#D4E157"/>
    <ellipse cx="18" cy="10" rx="1" ry="0.5" fill="#795548" />
    <ellipse cx="7" cy="17" rx="1" ry="0.5" fill="#6D4C41" />
  </svg>
);

export default PlantainIconComponent;
