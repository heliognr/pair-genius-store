
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithRaisedEyebrowIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M7 8C7.5 7 9 6.5 10.5 7" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M14 9H16" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 15H15" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default FaceWithRaisedEyebrowIconComponent;
