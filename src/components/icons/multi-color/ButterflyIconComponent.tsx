
import React from 'react';
import type { SVGProps } from 'react';

const ButterflyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 12L4 4L8 12L4 20L12 12Z" fill="#FFCA28"/>
    <path d="M12 12L20 4L16 12L20 20L12 12Z" fill="#FF7043"/>
    <rect x="11" y="2" width="2" height="20" fill="#795548"/>
    <line x1="10" y1="2" x2="8" y2="0" stroke="#795548" strokeWidth="1"/>
    <line x1="14" y1="2" x2="16" y2="0" stroke="#795548" strokeWidth="1"/>
  </svg>
);

export default ButterflyIconComponent;
