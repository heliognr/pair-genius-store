
import React from 'react';
import type { SVGProps } from 'react';

const JapaneseGoblinIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#EF5350"/>
    <circle cx="9" cy="9" r="1" fill="#FFFFFF"/> <circle cx="15" cy="9" r="1" fill="#FFFFFF"/>
    <path d="M10 14L12 10L14 14H10Z" fill="#FFCDD2"/> {/* Long nose */}
    <path d="M8 16C8 16 9.5 13.5 12 13.5C14.5 13.5 16 16 16 16" stroke="#B71C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 5A2 1 0 008 6M14 5A2 1 0 0116 6" stroke="#B71C1C" strokeWidth="1" fill="none"/>
  </svg>
);

export default JapaneseGoblinIconComponent;
