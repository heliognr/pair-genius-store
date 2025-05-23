
import React from 'react';
import type { SVGProps } from 'react';

const CompassIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" stroke="#757575" fill="#FAFAFA"/>
    <polygon points="12 2 15 12 12 22 9 12" fill="#EF5350"/>
    <polygon points="12 2 15 12 12 22 9 12" transform="rotate(90 12 12)" fill="#42A5F5" opacity="0.7"/>
    <circle cx="12" cy="12" r="3" fill="#BDBDBD"/>
  </svg>
);

export default CompassIconComponent;
