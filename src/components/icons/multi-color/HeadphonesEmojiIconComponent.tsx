
import React from 'react';
import type { SVGProps } from 'react';

const HeadphonesEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/> {/* Yellow face */}
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    <path d="M8 14C8 14 9.5 16.5 12 16.5C14.5 16.5 16 14 16 14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    {/* Headphones */}
    <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12" stroke="#4A5568" strokeWidth="2" fill="none"/>
    <rect x="4" y="11" width="3" height="4" rx="1" fill="#6B7280"/>
    <rect x="17" y="11" width="3" height="4" rx="1" fill="#6B7280"/>
  </svg>
);

export default HeadphonesEmojiIconComponent;
