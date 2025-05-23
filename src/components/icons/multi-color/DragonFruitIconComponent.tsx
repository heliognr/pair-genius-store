
import React from 'react';
import type { SVGProps } from 'react';

const DragonFruitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="7" ry="8" fill="#F06292"/>
    <path d="M12 4L10 7L12 6L14 7L12 4Z" fill="#81C784"/>
    <path d="M7 9L5 11L7 10L9 12L7 9Z" fill="#81C784"/>
    <path d="M17 9L19 11L17 10L15 12L17 9Z" fill="#81C784"/>
    <path d="M9 17L7 19L9 16L11 18L9 17Z" fill="#81C784"/>
    <path d="M15 17L17 19L15 16L13 18L15 17Z" fill="#81C784"/>
    <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
    <circle cx="11" cy="11.5" r="0.3" fill="black"/> <circle cx="13" cy="11.5" r="0.3" fill="black"/>
    <circle cx="12" cy="10.5" r="0.3" fill="black"/> <circle cx="12" cy="13.5" r="0.3" fill="black"/>
  </svg>
);

export default DragonFruitIconComponent;
