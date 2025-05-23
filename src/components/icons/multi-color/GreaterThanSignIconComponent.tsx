
import React from 'react';
import type { SVGProps } from 'react';

const GreaterThanSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <polyline points="8 4 16 12 8 20" stroke="#76FF03" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default GreaterThanSignIconComponent;
