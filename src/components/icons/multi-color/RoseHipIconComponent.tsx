
import React from 'react';
import type { SVGProps } from 'react';

const RoseHipIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="4" ry="5" fill="#D32F2F"/>
    <path d="M10 8L9 6H11L10 8Z" fill="#4CAF50"/>
    <path d="M14 8L13 6H15L14 8Z" fill="#4CAF50"/>
  </svg>
);

export default RoseHipIconComponent;
