
import React from 'react';
import type { SVGProps } from 'react';

const RadiationIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" fill="#212121"/>
    <circle cx="12" cy="12" r="2" fill="#FFEB3B"/>
    <path d="M12 2V7M22 12H17M12 22V17M2 12H7" stroke="#FFEB3B" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 2V7M22 12H17M12 22V17M2 12H7" transform="rotate(60 12 12)" stroke="#FFEB3B" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 2V7M22 12H17M12 22V17M2 12H7" transform="rotate(120 12 12)" stroke="#FFEB3B" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export default RadiationIconComponent;
