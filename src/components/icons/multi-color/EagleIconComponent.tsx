
import React from 'react';
import type { SVGProps } from 'react';

const EagleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2L3 10L5 20H19L21 10L12 2Z" fill="#8D6E63"/>
    <path d="M12 2L5 10L7 12H17L19 10L12 2Z" fill="#FFFFFF"/>
    <path d="M12 10L7 12M12 10L17 12" stroke="#A1887F" strokeWidth="1"/>
    <polygon points="11,9 13,9 12,11" fill="#FFC107"/>
    <circle cx="10" cy="7" r="0.5" fill="black"/> <circle cx="14" cy="7" r="0.5" fill="black"/>
  </svg>
);

export default EagleIconComponent;
