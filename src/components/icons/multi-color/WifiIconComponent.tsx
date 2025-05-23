
import React from 'react';
import type { SVGProps } from 'react';

const WifiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" stroke="#1E88E5"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0" stroke="#42A5F5"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="#90CAF9"/>
    <line x1="12" y1="20" x2="12.01" y2="20" stroke="#1976D2"/>
  </svg>
);

export default WifiIconComponent;
