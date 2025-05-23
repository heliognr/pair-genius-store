
import React from 'react';
import type { SVGProps } from 'react';

const GearIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="4" fill="#90A4AE"/>
    <path d="M12 2L11 5H13L12 2Z M12 22L11 19H13L12 22Z M2 12L5 11V13L2 12Z M22 12L19 11V13L22 12Z M5 5L7 7L5 7Z M19 5L17 7L19 7Z M5 19L7 17L5 17Z M19 19L17 17L19 17Z" fill="#B0BEC5"/>
  </svg>
);

export default GearIconComponent;
