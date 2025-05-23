
import React from 'react';
import type { SVGProps } from 'react';

const QuinceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="7" fill="#FFEB3B"/>
    <path d="M12 5L11 3L13 4" stroke="#8BC34A" strokeWidth="1" fill="none"/>
    <ellipse cx="10" cy="10" rx="1" ry="0.5" fill="#FFF9C4" transform="rotate(-30 10 10)"/>
  </svg>
);

export default QuinceIconComponent;
