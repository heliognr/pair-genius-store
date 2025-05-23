
import React from 'react';
import type { SVGProps } from 'react';

const GuavaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="7" fill="#A5D6A7"/>
    <circle cx="12" cy="12" r="4" fill="#FFCDD2"/>
    <path d="M12 5L11.5 3L12.5 3.5L12 5Z" fill="#689F38"/>
  </svg>
);

export default GuavaIconComponent;
