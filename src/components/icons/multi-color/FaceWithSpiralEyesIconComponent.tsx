
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithSpiralEyesIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="2.5" stroke="#1F2937" strokeWidth="1" fill="none"/>
    <path d="M9 10 A1.5 1.5 0 0 1 7.5 8.5 A1.5 1.5 0 0 1 9 7 A1.5 1.5 0 0 1 10.5 8.5 A1.5 1.5 0 0 1 9 10" stroke="#4A5568" strokeWidth="0.5" fill="none"/>
    <circle cx="15" cy="10" r="2.5" stroke="#1F2937" strokeWidth="1" fill="none"/>
    <path d="M15 10 A1.5 1.5 0 0 1 13.5 8.5 A1.5 1.5 0 0 1 15 7 A1.5 1.5 0 0 1 16.5 8.5 A1.5 1.5 0 0 1 15 10" stroke="#4A5568" strokeWidth="0.5" fill="none"/>
    <ellipse cx="12" cy="16" rx="3" ry="1.5" fill="#1F2937"/>
  </svg>
);

export default FaceWithSpiralEyesIconComponent;
