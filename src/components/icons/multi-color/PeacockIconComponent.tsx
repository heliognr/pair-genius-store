
import React from 'react';
import type { SVGProps } from 'react';

const PeacockIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 12C7 12 4 16 4 22H20C20 16 17 12 12 12Z" fill="#4CAF50"/>
    <circle cx="12" cy="9" r="4" fill="#2196F3"/>
    <path d="M12 5V2M10 3H14" stroke="#0D47A1" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="8" cy="18" r="1" fill="#FFC107"/> <circle cx="16" cy="18" r="1" fill="#FFC107"/>
    <circle cx="10" cy="20" r="1" fill="#FFEB3B"/> <circle cx="14" cy="20" r="1" fill="#FFEB3B"/>
    <circle cx="12" cy="16" r="1" fill="#F57C00"/>
  </svg>
);

export default PeacockIconComponent;
