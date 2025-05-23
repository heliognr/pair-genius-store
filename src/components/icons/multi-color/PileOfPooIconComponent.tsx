
import React from 'react';
import type { SVGProps } from 'react';

const PileOfPooIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 20C8 20 6 17 6 14C6 11 9 8 12 8C15 8 18 11 18 14C18 17 16 20 12 20Z" fill="#795548"/>
    <path d="M12 14C10 14 8.5 12 8.5 10C8.5 8 10 6 12 6C14 6 15.5 8 15.5 10C15.5 12 14 14 12 14Z" fill="#8D6E63"/>
    <path d="M12 10C11 10 10.25 9 10.25 8C10.25 7 11 6 12 6C13 6 13.75 7 13.75 8C13.75 9 13 10 12 10Z" fill="#A1887F"/>
    <circle cx="10" cy="10.5" r="1" fill="#FFFFFF"/> <circle cx="14" cy="10.5" r="1" fill="#FFFFFF"/>
  </svg>
);

export default PileOfPooIconComponent;
