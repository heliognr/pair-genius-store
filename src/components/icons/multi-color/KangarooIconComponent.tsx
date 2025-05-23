
import React from 'react';
import type { SVGProps } from 'react';

const KangarooIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M6 20V12C6 9 8 7 11 7C13 7 14 8 15 10L18 9V14L15 16V20H12L10 17H8L6 20Z" fill="#A1887F"/>
    <path d="M11 7L10 4M15 10L17 6" stroke="#795548" strokeWidth="1.5"/>
    <path d="M10 17C8 18 6 16 6 12" fill="#D7CCC8"/>
    <circle cx="10.5" cy="5.5" r="0.5" fill="black"/>
  </svg>
);

export default KangarooIconComponent;
