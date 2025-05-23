
import React from 'react';
import type { SVGProps } from 'react';

const KingfisherIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C8 2 5 5 5 9C5 11 7 13 10 13H14C17 13 19 11 19 9C19 5 16 2 12 2Z" fill="#03A9F4"/>
    <path d="M10 13L8 18H16L14 13" fill="#FF9800"/>
    <polygon points="11,7 13,7 12,9" fill="#FFFFFF"/>
  </svg>
);

export default KingfisherIconComponent;
