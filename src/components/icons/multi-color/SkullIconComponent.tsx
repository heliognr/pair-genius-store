
import React from 'react';
import type { SVGProps } from 'react';

const SkullIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C8 2 5 5 5 9V15C5 19 8 22 12 22C16 22 19 19 19 15V9C19 5 16 2 12 2Z" fill="#CFD8DC"/>
    <circle cx="9.5" cy="10" r="2" fill="#263238"/>
    <circle cx="14.5" cy="10" r="2" fill="#263238"/>
    <polygon points="11,14 13,14 12,16" fill="#263238"/>
    <rect x="9" y="17" width="2" height="2" fill="#263238"/> <rect x="13" y="17" width="2" height="2" fill="#263238"/>
  </svg>
);

export default SkullIconComponent;
