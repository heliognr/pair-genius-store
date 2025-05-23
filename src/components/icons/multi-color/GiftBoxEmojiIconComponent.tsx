
import React from 'react';
import type { SVGProps } from 'react';

const GiftBoxEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="5" y="10" width="14" height="10" rx="1" fill="#EF5350"/>
    <rect x="4" y="7" width="16" height="4" rx="1" fill="#E53935"/>
    <path d="M10 7V2M14 7V2" stroke="#FFF176" strokeWidth="2"/>
    <path d="M8 4H16" stroke="#FFF176" strokeWidth="2"/>
  </svg>
);

export default GiftBoxEmojiIconComponent;
