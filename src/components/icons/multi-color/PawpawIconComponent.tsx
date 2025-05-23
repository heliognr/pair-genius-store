
import React from 'react';
import type { SVGProps } from 'react';

const PawpawIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="6" ry="8" fill="#FFB300"/>
    <ellipse cx="12" cy="12" rx="2" ry="3" fill="#3E2723"/>
    <path d="M12 4L11 2L13 3" stroke="#7CB342" strokeWidth="1" fill="none"/>
  </svg>
);

export default PawpawIconComponent;
