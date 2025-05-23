
import React from 'react';
import type { SVGProps } from 'react';

const MaleSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="10" cy="14" r="6" stroke="#2196F3" strokeWidth="2.5" fill="none"/>
    <line x1="14" y1="5" x2="20" y2="5" stroke="#2196F3" strokeWidth="2.5"/>
    <line x1="17" y1="2" x2="17" y2="8" stroke="#2196F3" strokeWidth="2.5"/>
    <line x1="15" y1="10" x2="18" y2="7" stroke="#2196F3" strokeWidth="2.5"/>
  </svg>
);

export default MaleSignIconComponent;
