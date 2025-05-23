
import React from 'react';
import type { SVGProps } from 'react';

const SeeNoEvilMonkeyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="11" r="6" fill="#A1887F"/>
    <ellipse cx="12" cy="11.5" rx="4" ry="3.5" fill="#D7CCC8"/>
    <circle cx="6" cy="10" r="2.5" fill="#795548"/> <circle cx="18" cy="10" r="2.5" fill="#795548"/>
    <rect x="7" y="9" width="3" height="2.5" rx="1" fill="#D7CCC8"/> {/* Hand over eye */}
    <rect x="14" y="9" width="3" height="2.5" rx="1" fill="#D7CCC8"/> {/* Hand over eye */}
    <path d="M10.5 13C10.5 13 11 14 12 14C13 14 13.5 13 13.5 13" stroke="#5D4037" strokeWidth="0.7" strokeLinecap="round" fill="none"/>
  </svg>
);

export default SeeNoEvilMonkeyIconComponent;
