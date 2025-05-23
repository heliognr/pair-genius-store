
import React from 'react';
import type { SVGProps } from 'react';

const StarAppleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="7" fill="#7E57C2"/>
    <path d="M12 7.5L13.5 11L17 11L14.5 13L15.5 16.5L12 14.5L8.5 16.5L9.5 13L7 11L10.5 11L12 7.5Z" fill="#FFF59D"/>
  </svg>
);

export default StarAppleIconComponent;
