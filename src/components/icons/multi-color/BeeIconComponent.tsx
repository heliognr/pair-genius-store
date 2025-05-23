
import React from 'react';
import type { SVGProps } from 'react';

const BeeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="6" ry="4" fill="#FFC107"/>
    <rect x="8" y="10" width="8" height="1.5" fill="#212121"/>
    <rect x="8" y="12.5" width="8" height="1.5" fill="#212121"/>
    <path d="M9 8L7 5M15 8L17 5" stroke="#424242" strokeWidth="1"/>
    <ellipse cx="8" cy="7" rx="2" ry="3" fill="#B3E5FC" transform="rotate(-30 8 7)"/>
    <ellipse cx="16" cy="7" rx="2" ry="3" fill="#B3E5FC" transform="rotate(30 16 7)"/>
  </svg>
);

export default BeeIconComponent;
