
import React from 'react';
import type { SVGProps } from 'react';

const ChipmunkIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="15" rx="5" ry="6" fill="#D2691E"/>
    <circle cx="12" cy="9" r="3" fill="#8B4513"/>
    <path d="M10 8L9 6M14 8L15 6" stroke="#A0522D" strokeWidth="1"/>
    <rect x="11" y="13" width="2" height="3" fill="#FFFFFF"/>
    <path d="M14 18L18 20L16 22" stroke="#8B4513" strokeWidth="1" fill="none"/>
  </svg>
);

export default ChipmunkIconComponent;
