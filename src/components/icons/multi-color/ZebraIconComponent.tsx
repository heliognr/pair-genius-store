
import React from 'react';
import type { SVGProps } from 'react';

const ZebraIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#FFFFFF"/>
    <path d="M3 7L12 12L21 7" stroke="#000000" strokeWidth="1.5"/>
    <path d="M12 2V12M12 22V12" stroke="#000000" strokeWidth="1.5"/>
    <path d="M3 12L8 14.5L3 17" stroke="#000000" strokeWidth="1.5"/>
    <path d="M21 12L16 14.5L21 17" stroke="#000000" strokeWidth="1.5"/>
  </svg>
);

export default ZebraIconComponent;
