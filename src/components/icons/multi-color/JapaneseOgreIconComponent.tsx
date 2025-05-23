
import React from 'react';
import type { SVGProps } from 'react';

const JapaneseOgreIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
    <circle cx="9" cy="10" r="1.5" fill="#FFEB3B"/> <circle cx="15" cy="10" r="1.5" fill="#FFEB3B"/>
    <path d="M8 15H16L12 18L8 15Z" fill="#FFFFFF"/>
    <path d="M10 15V17M14 15V17" stroke="#7F0000" strokeWidth="1"/>
    <path d="M10 6L8 4M14 6L16 4" stroke="#7F0000" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default JapaneseOgreIconComponent;
