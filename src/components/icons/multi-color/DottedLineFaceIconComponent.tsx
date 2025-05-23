
import React from 'react';
import type { SVGProps } from 'react';

const DottedLineFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24" opacity="0.5"/>
    <circle cx="9" cy="10" r="1.5" fill="#1F2937" opacity="0.5"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937" opacity="0.5"/>
    <path d="M8 14H16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M4 12H6M8 12H10M14 12H16M18 12H20" stroke="#A1A1AA" strokeWidth="1" strokeDasharray="1 2" strokeLinecap="round"/>
    <path d="M12 4V6M12 8V10M12 14V16M12 18V20" stroke="#A1A1AA" strokeWidth="1" strokeDasharray="1 2" strokeLinecap="round"/>
  </svg>
);

export default DottedLineFaceIconComponent;
