
import React from 'react';
import type { SVGProps } from 'react';

const LemurIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="10" r="5" fill="#616161"/>
    <circle cx="12" cy="10" r="3" fill="#FFFFFF"/>
    <circle cx="10.5" cy="9.5" r="1" fill="#FFEB3B"/>
    <circle cx="13.5" cy="9.5" r="1" fill="#FFEB3B"/>
    <path d="M10 7L9 5M14 7L15 5" stroke="#424242" strokeWidth="1"/>
    <path d="M12 15L10 20H14L12 15Z" fill="#424242"/>
    <path d="M10 20L8 22M14 20L16 22" stroke="#212121" strokeWidth="1"/>
  </svg>
);

export default LemurIconComponent;
