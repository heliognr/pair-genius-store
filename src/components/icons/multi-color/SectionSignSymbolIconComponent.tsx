
import React from 'react';
import type { SVGProps } from 'react';

const SectionSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M7 10C7 7 9 5 12 5C15 5 17 7 17 10C17 13 15 15 12 15C9 15 7 13 7 10Z M7 14C7 17 9 19 12 19C15 19 17 17 17 14" stroke="#66BB6A" strokeWidth="2.5" fill="none"/>
    <path d="M12 5C10 5 8 7 8 10" stroke="#A5D6A7" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export default SectionSignSymbolIconComponent;
