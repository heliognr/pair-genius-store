
import React from 'react';
import type { SVGProps } from 'react';

const CowboyHatFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="11" r="1.5" fill="#1F2937"/> <circle cx="15" cy="11" r="1.5" fill="#1F2937"/>
    <path d="M8 15C8 15 9.5 17.5 12 17.5C14.5 17.5 16 15 16 15" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 10C4 7 7 5 12 5C17 5 20 7 20 10H4Z" fill="#8D6E63"/>
    <path d="M6 9.5C6 8 8 7 12 7C16 7 18 8 18 9.5" fill="#A1887F"/>
  </svg>
);

export default CowboyHatFaceIconComponent;
