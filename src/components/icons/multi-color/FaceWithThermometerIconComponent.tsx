
import React from 'react';
import type { SVGProps } from 'react';

const FaceWithThermometerIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/> <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M8 16C8 16 9.5 13.5 12 13.5C14.5 13.5 16 16 16 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Frown */}
    <rect x="17" y="13" width="3" height="7" rx="1" fill="#E0E0E0"/>
    <rect x="17.5" y="16" width="2" height="3" fill="#EF5350"/>
    <circle cx="18.5" cy="19.5" r="1.5" fill="#EF5350"/>
  </svg>
);

export default FaceWithThermometerIconComponent;
