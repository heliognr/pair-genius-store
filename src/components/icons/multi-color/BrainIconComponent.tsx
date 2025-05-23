
import React from 'react';
import type { SVGProps } from 'react';

const BrainIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M9 2C5 2 2 5.5 2 9.5C2 12.5 4 15.5 7 17.5C7 20.5 9 22 12 22C15 22 17 20.5 17 17.5C20 15.5 22 12.5 22 9.5C22 5.5 19 2 15 2C13.5 2 12.5 3 12 4C11.5 3 10.5 2 9 2Z" fill="#F8BBD0"/>
    <path d="M12 4C12 6 11 7 10 7C9 7 8 6 8 4C8 3 9 2.5 10 2.5C11 2.5 12 3 12 4Z" fill="#F48FB1"/>
    <path d="M12 4C12 6 13 7 14 7C15 7 16 6 16 4C16 3 15 2.5 14 2.5C13 2.5 12 3 12 4Z" fill="#F48FB1"/>
    <path d="M9 17.5C9 19 10 20 12 20C14 20 15 19 15 17.5V15H9V17.5Z" fill="#F48FB1"/>
  </svg>
);

export default BrainIconComponent;
