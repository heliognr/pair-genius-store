
import React from 'react';
import type { SVGProps } from 'react';

const EmuIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="7" r="3" fill="#795548"/>
    <path d="M12 10V16" stroke="#A1887F" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="12" cy="18" rx="5" ry="3" fill="#D7CCC8"/>
    <path d="M9 20L7 22M15 20L17 22" stroke="#A1887F" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="11" cy="6.5" r="0.5" fill="black"/> <circle cx="13" cy="6.5" r="0.5" fill="black"/>
    <path d="M13 7L14 8" stroke="#5D4037" strokeWidth="1"/>
  </svg>
);

export default EmuIconComponent;
