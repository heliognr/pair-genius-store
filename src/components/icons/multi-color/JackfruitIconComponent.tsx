
import React from 'react';
import type { SVGProps } from 'react';

const JackfruitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="7" ry="9" fill="#CDDC39"/>
    <circle cx="10" cy="10" r="0.7" fill="#7CB342"/> <circle cx="14" cy="10" r="0.7" fill="#7CB342"/>
    <circle cx="9" cy="12" r="0.7" fill="#7CB342"/> <circle cx="15" cy="12" r="0.7" fill="#7CB342"/>
    <circle cx="10" cy="14" r="0.7" fill="#7CB342"/> <circle cx="14" cy="14" r="0.7" fill="#7CB342"/>
    <circle cx="12" cy="8" r="0.7" fill="#7CB342"/> <circle cx="12" cy="16" r="0.7" fill="#7CB342"/>
  </svg>
);

export default JackfruitIconComponent;
