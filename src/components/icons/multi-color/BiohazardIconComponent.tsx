
import React from 'react';
import type { SVGProps } from 'react';

const BiohazardIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" fill="#FFEB3B"/>
    <circle cx="12" cy="12" r="3" fill="#FDD835"/>
    <path d="M12 3A9 9 0 0012 21A4.5 4.5 0 0112 12A4.5 4.5 0 0112 3Z" fill="#212121"/>
    <path d="M12 3A9 9 0 005.17 16.83A4.5 4.5 0 0112 12A4.5 4.5 0 0112 3Z" transform="rotate(120 12 12)" fill="#212121"/>
    <path d="M12 3A9 9 0 005.17 16.83A4.5 4.5 0 0112 12A4.5 4.5 0 0112 3Z" transform="rotate(240 12 12)" fill="#212121"/>
  </svg>
);

export default BiohazardIconComponent;
