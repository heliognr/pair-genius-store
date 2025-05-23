
import React from 'react';
import type { SVGProps } from 'react';

const FeijoaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="5" ry="7" fill="#8BC34A"/>
    <ellipse cx="12" cy="12" rx="2.5" ry="4" fill="#AED581"/>
    <path d="M12 5L11.5 3L12.5 4" stroke="#689F38" strokeWidth="1" fill="none"/>
  </svg>
);

export default FeijoaIconComponent;
