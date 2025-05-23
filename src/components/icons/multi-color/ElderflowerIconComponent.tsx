
import React from 'react';
import type { SVGProps } from 'react';

const ElderflowerIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="2" fill="#FFFDE7"/>
    <circle cx="10" cy="10" r="1.5" fill="#FFF9C4"/>
    <circle cx="14" cy="10" r="1.5" fill="#FFF9C4"/>
    <circle cx="10" cy="14" r="1.5" fill="#FFF9C4"/>
    <circle cx="14" cy="14" r="1.5" fill="#FFF9C4"/>
    <path d="M12 6L11 4M12 18L11 20" stroke="#C8E6C9" strokeWidth="1"/>
  </svg>
);

export default ElderflowerIconComponent;
