
import React from 'react';
import type { SVGProps } from 'react';

const PlusSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="10" y="4" width="4" height="16" fill="#4CAF50"/>
    <rect x="4" y="10" width="16" height="4" fill="#81C784"/>
  </svg>
);

export default PlusSignIconComponent;
