
import React from 'react';
import type { SVGProps } from 'react';

const FemaleSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="10" r="6" stroke="#E91E63" strokeWidth="2.5" fill="none"/>
    <line x1="12" y1="16" x2="12" y2="22" stroke="#E91E63" strokeWidth="2.5"/>
    <line x1="9" y1="19" x2="15" y2="19" stroke="#E91E63" strokeWidth="2.5"/>
  </svg>
);

export default FemaleSignIconComponent;
