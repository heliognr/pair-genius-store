
import React from 'react';
import type { SVGProps } from 'react';

const NumbatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="15" rx="7" ry="3" fill="#A1887F"/>
    <path d="M8 13H16V11H8V13Z" fill="#FFFFFF"/>
    <path d="M9 10H15V8H9V10Z" fill="#795548"/>
    <path d="M10 7L9 5M14 7L15 5" stroke="#5D4037" strokeWidth="1"/>
  </svg>
);

export default NumbatIconComponent;
