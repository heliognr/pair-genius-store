
import React from 'react';
import type { SVGProps } from 'react';

const FlamingoIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M15 2C15 4 13 5 12 5C10 5 8 3 8 2C8 4 10 7 12 9C14 7 16 4 15 2Z" fill="#FF80AB"/>
    <path d="M12 9V17" stroke="#FF80AB" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 17L7 21M15 17L17 21" stroke="#FF80AB" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 5C11 4 10 4 9 5L10 7" stroke="#212121" strokeWidth="1" fill="none"/>
  </svg>
);

export default FlamingoIconComponent;
