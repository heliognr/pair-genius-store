
import React from 'react';
import type { SVGProps } from 'react';

const InterobangSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    {/* Question Mark Part */}
    <path d="M12 14.5C12 14.5 12 13 10 12C8 11 8 8.5 10 7C11.5 6 12.5 7 12.5 8.5" stroke="#FF7043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="18" r="1.5" fill="#FF5722"/>
    {/* Exclamation Mark Part (offset slightly) */}
    <rect x="10.5" y="4" width="3" height="8" rx="1.5" fill="#FF7043" transform="translate(0 -1)"/>
  </svg>
);

export default InterobangSymbolIconComponent;
