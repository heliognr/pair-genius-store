
import React from 'react';
import type { SVGProps } from 'react';

const ImpIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#7B1FA2"/>
    <path d="M8 9L10 11M10 9L8 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 9L16 11M16 9L14 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 15H15L12 13L9 15Z" fill="#4A148C"/>
    <path d="M9 6L7 4M15 6L17 4" stroke="#4A148C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default ImpIconComponent;
