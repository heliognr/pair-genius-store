
import React from 'react';
import type { SVGProps } from 'react';

const ThinkingBubbleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M8 17H16V14H8V17Z" fill="#E3F2FD"/>
    <circle cx="7" cy="12" r="1.5" fill="#BBDEFB"/>
    <circle cx="5" cy="9" r="1" fill="#90CAF9"/>
  </svg>
);

export default ThinkingBubbleIconComponent;
