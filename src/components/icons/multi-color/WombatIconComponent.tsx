
import React from 'react';
import type { SVGProps } from 'react';

const WombatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="15" rx="8" ry="6" fill="#9E9E9E"/>
    <circle cx="12" cy="11" r="3" fill="#BDBDBD"/>
    <circle cx="11" cy="10.5" r="0.5" fill="black"/>
    <circle cx="13" cy="10.5" r="0.5" fill="black"/>
    <path d="M12 12L11.5 12.5H12.5L12 12Z" fill="#757575"/>
  </svg>
);

export default WombatIconComponent;
