
import React from 'react';
import type { SVGProps } from 'react';

const ZzzIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M6 8L10 8L6 12L10 12" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L14 14L10 18L14 18" stroke="#90CAF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <path d="M14 4L18 4L14 8L18 8" stroke="#E3F2FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
  </svg>
);

export default ZzzIconComponent;
