
import React from 'react';
import type { SVGProps } from 'react';

const WhaleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M3 10C3 5 8 2 14 2C20 2 22 6 22 10C22 14 18 18 12 18C8 18 4 15 3 10Z" fill="#1E88E5"/>
    <path d="M4 9.5C4 6 8.5 3.5 14 3.5C19 3.5 20.5 6.5 20.5 9.5C20.5 12.5 17.5 16.5 12 16.5C8.5 16.5 5 14 4 9.5Z" fill="#42A5F5"/>
    <path d="M19 10L22 13M12 2V5" stroke="#90CAF9" strokeWidth="1.5"/>
    <circle cx="17" cy="7" r="1" fill="white"/> <circle cx="17" cy="7" r="0.5" fill="black"/>
  </svg>
);

export default WhaleIconComponent;
