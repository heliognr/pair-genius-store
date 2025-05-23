
import React from 'react';
import type { SVGProps } from 'react';

const AntIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="8" cy="12" r="2" fill="#BF360C"/>
    <circle cx="12" cy="12" r="2.5" fill="#BF360C"/>
    <circle cx="16" cy="12" r="2" fill="#BF360C"/>
    <line x1="8" y1="10" x2="6" y2="8" stroke="#795548" strokeWidth="1"/>
    <line x1="16" y1="10" x2="18" y2="8" stroke="#795548" strokeWidth="1"/>
    <line x1="7" y1="14" x2="5" y2="16" stroke="#795548" strokeWidth="1"/>
    <line x1="9" y1="14" x2="7" y2="16" stroke="#795548" strokeWidth="1"/>
    <line x1="15" y1="14" x2="17" y2="16" stroke="#795548" strokeWidth="1"/>
    <line x1="17" y1="14" x2="19" y2="16" stroke="#795548" strokeWidth="1"/>
  </svg>
);

export default AntIconComponent;
