
import React from 'react';
import type { SVGProps } from 'react';

const GojiBerryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="3" ry="5" fill="#FF6F00"/>
    <ellipse cx="12" cy="12" rx="2" ry="4" fill="#FF8F00"/>
    <path d="M12 7L11.5 5L12.5 6L12 7Z" fill="#4CAF50"/>
  </svg>
);

export default GojiBerryIconComponent;
