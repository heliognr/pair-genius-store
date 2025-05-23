
import React from 'react';
import type { SVGProps } from 'react';

const ThoughtBalloonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M4 6C4 3.79086 5.79086 2 8 2H16C18.2091 2 20 3.79086 20 6V12C20 14.2091 18.2091 16 16 16H10L6 20V16H4V6Z" fill="#CFD8DC" opacity="0.8"/>
    <circle cx="8" cy="18" r="1" fill="#B0BEC5"/>
    <circle cx="6" cy="16" r="0.7" fill="#B0BEC5"/>
  </svg>
);

export default ThoughtBalloonIconComponent;
