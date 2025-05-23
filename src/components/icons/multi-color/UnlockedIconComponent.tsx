
import React from 'react';
import type { SVGProps } from 'react';

const UnlockedIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="5" y="10" width="14" height="10" rx="2" fill="#AED581"/>
    <path d="M12 10V6C12 3.79086 10.2091 2 8 2H8" stroke="#8BC34A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="12" cy="15" r="1.5" fill="#689F38"/>
  </svg>
);

export default UnlockedIconComponent;
