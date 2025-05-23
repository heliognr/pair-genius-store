
import React from 'react';
import type { SVGProps } from 'react';

const FaceHoldingBackTearsIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="8.5" cy="9.5" r="2" fill="#FFFFFF"/> <circle cx="8.5" cy="9.5" r="1" fill="#1F2937"/>
    <circle cx="15.5" cy="9.5" r="2" fill="#FFFFFF"/> <circle cx="15.5" cy="9.5" r="1" fill="#1F2937"/>
    <path d="M9 15C9 15 10 13.5 12 13.5C14 13.5 15 15 15 15" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M8.5 11.5L9 12.5" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round"/>
    <path d="M15.5 11.5L15 12.5" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default FaceHoldingBackTearsIconComponent;
