
import React from 'react';
import type { SVGProps } from 'react';

const MagnifyingGlassIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="10" cy="10" r="6" stroke="#78909C" strokeWidth="2.5" fill="none"/>
    <line x1="15" y1="15" x2="20" y2="20" stroke="#546E7A" strokeWidth="2.5"/>
    <circle cx="10" cy="10" r="3" fill="#CFD8DC"/>
  </svg>
);

export default MagnifyingGlassIconComponent;
