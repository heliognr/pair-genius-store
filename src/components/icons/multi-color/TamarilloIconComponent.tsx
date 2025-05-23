
import React from 'react';
import type { SVGProps } from 'react';

const TamarilloIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="5" ry="7" fill="#D32F2F"/>
    <ellipse cx="12" cy="12" rx="3" ry="5" fill="#EF5350"/>
    <path d="M12 5L11.5 3L12.5 4" stroke="#4CAF50" strokeWidth="1" fill="none"/>
  </svg>
);

export default TamarilloIconComponent;
