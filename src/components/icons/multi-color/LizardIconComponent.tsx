
import React from 'react';
import type { SVGProps } from 'react';

const LizardIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M5 15L12 12L19 15L16 5H8L5 15Z" fill="#A5D6A7"/>
    <path d="M6 14L12 12.5L18 14L15.5 6H8.5L6 14Z" fill="#C8E6C9"/>
    <path d="M12 12L10 20M12 12L14 20" stroke="#66BB6A" strokeWidth="1.5"/>
    <circle cx="10" cy="7" r="0.7" fill="black"/> <circle cx="14" cy="7" r="0.7" fill="black"/>
    <path d="M4 16L2 18M20 16L22 18" stroke="#66BB6A" strokeWidth="1"/>
  </svg>
);

export default LizardIconComponent;
