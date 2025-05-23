
import React from 'react';
import type { SVGProps } from 'react';

const QuokkaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="13" r="7" fill="#BCAAA4"/>
    <circle cx="12" cy="10" r="3" fill="#D7CCC8"/>
    <circle cx="11" cy="9.5" r="0.5" fill="black"/>
    <circle cx="13" cy="9.5" r="0.5" fill="black"/>
    <path d="M11 11.5C11 12 11.5 12.5 12 12.5C12.5 12.5 13 12 13 11.5" stroke="#8D6E63" strokeWidth="0.5" fill="none" strokeLinecap="round"/>
    <path d="M9 7L8 5M15 7L16 5" stroke="#A1887F" strokeWidth="1"/>
  </svg>
);

export default QuokkaIconComponent;
