
import React from 'react';
import type { SVGProps } from 'react';

const AnchorIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="6" r="2.5" stroke="#78909C" strokeWidth="2" fill="none"/>
    <line x1="12" y1="8.5" x2="12" y2="18" stroke="#78909C" strokeWidth="2"/>
    <path d="M8 15C8 18 5 20 3 18" stroke="#546E7A" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M16 15C16 18 19 20 21 18" stroke="#546E7A" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <line x1="7" y1="12" x2="17" y2="12" stroke="#78909C" strokeWidth="2"/>
  </svg>
);

export default AnchorIconComponent;
