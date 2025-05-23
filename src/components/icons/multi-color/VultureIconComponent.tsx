
import React from 'react';
import type { SVGProps } from 'react';

const VultureIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2L3 10L5 20H19L21 10L12 2Z" fill="#424242"/>
    <path d="M12 10C10 10 8 8 8 6C8 4 10 3 12 3C14 3 16 4 16 6C16 8 14 10 12 10Z" fill="#F44336"/>
    <polygon points="11,7 13,7 12,8" fill="#FFEB3B"/>
    <circle cx="11.5" cy="5" r="0.3" fill="black"/> <circle cx="12.5" cy="5" r="0.3" fill="black"/>
  </svg>
);

export default VultureIconComponent;
