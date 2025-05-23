
import React from 'react';
import type { SVGProps } from 'react';

const BuddhasHandIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 20C8 20 6 17 6 14V10C6 7 8 5 12 5C16 5 18 7 18 10V14C18 17 16 20 12 20Z" fill="#FFEB3B"/>
    <path d="M10 18V8M12 18V8M14 18V8" stroke="#FDD835" strokeWidth="1"/>
    <path d="M9 5L7 3M15 5L17 3" stroke="#FBC02D" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default BuddhasHandIconComponent;
