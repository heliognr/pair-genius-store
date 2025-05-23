
import React from 'react';
import type { SVGProps } from 'react';

const MapPinIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#F44336"/>
    <circle cx="12" cy="10" r="3" fill="#FFFFFF"/>
  </svg>
);

export default MapPinIconComponent;
