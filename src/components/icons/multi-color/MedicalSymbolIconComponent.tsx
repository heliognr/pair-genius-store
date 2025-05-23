
import React from 'react';
import type { SVGProps } from 'react';

const MedicalSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <line x1="12" y1="2" x2="12" y2="22" stroke="#B0BEC5" strokeWidth="2.5"/>
    <path d="M8 18C8 15 10 13 12 13C14 13 16 15 16 18" stroke="#78909C" strokeWidth="2" fill="none"/>
    <path d="M8 6C8 9 10 11 12 11C14 11 16 9 16 6" stroke="#78909C" strokeWidth="2" fill="none"/>
    <path d="M10 4L14 2M10 20L14 22" stroke="#90A4AE" strokeWidth="1.5"/>
  </svg>
);

export default MedicalSymbolIconComponent;
