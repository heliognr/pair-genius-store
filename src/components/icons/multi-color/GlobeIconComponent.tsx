
import React from 'react';
import type { SVGProps } from 'react';

const GlobeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#90CAF9"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="#1E88E5"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#1E88E5" fill="#42A5F5" opacity="0.5"/>
  </svg>
);

export default GlobeIconComponent;
