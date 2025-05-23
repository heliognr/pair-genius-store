
import React from 'react';
import type { SVGProps } from 'react';

const LoquatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="5" ry="6" fill="#FFB74D"/>
    <path d="M12 6L11.5 4L12.5 5" stroke="#795548" strokeWidth="1" fill="none"/>
    <circle cx="11" cy="11" r="0.5" fill="#A1887F"/>
    <circle cx="13" cy="11" r="0.5" fill="#A1887F"/>
    <circle cx="12" cy="13" r="0.5" fill="#A1887F"/>
  </svg>
);

export default LoquatIconComponent;
