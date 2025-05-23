
import React from 'react';
import type { SVGProps } from 'react';

const TamarindIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M8 5C6 7 5 12 8 15L16 19C19 12 18 7 16 5L8 5Z" fill="#795548"/>
    <path d="M9 6C7.5 8 6.5 12 9 14L15 17.5C17.5 12 16.5 8 15 6.5L9 6Z" fill="#8D6E63"/>
  </svg>
);

export default TamarindIconComponent;
