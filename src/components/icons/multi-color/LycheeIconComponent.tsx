
import React from 'react';
import type { SVGProps } from 'react';

const LycheeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="6" fill="#E57373"/>
    <circle cx="12" cy="12" r="3" fill="#FFF9C4"/>
    <path d="M12 6L12.5 3L13 5" stroke="#795548" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default LycheeIconComponent;
