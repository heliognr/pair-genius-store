
import React from 'react';
import type { SVGProps } from 'react';

const ZipperMouthFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/> <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <line x1="8" y1="15" x2="16" y2="15" stroke="#78909C" strokeWidth="2"/>
    <line x1="9" y1="14" x2="9" y2="16" stroke="#78909C" strokeWidth="1"/>
    <line x1="11" y1="14" x2="11" y2="16" stroke="#78909C" strokeWidth="1"/>
    <line x1="13" y1="14" x2="13" y2="16" stroke="#78909C" strokeWidth="1"/>
    <line x1="15" y1="14" x2="15" y2="16" stroke="#78909C" strokeWidth="1"/>
    <rect x="15" y="14.5" width="2" height="1" fill="#B0BEC5"/>
  </svg>
);

export default ZipperMouthFaceIconComponent;
