
import React from 'react';
import type { SVGProps } from 'react';

const GiraffeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 22V15M12 15C12 11 10 8 7 8C4 8 3 10 3 12M12 15H15C18 15 19 12 19 10C19 7 17 5 14 5C12.5 5 11.5 3 10.5 2" stroke="#D2691E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10.5" cy="3.5" r="1.5" fill="#FFC107"/>
    <circle cx="14" cy="6.5" r="1.5" fill="#FFC107"/>
    <circle cx="7" cy="9.5" r="1" fill="#FFC107"/>
    <circle cx="4" cy="13" r="1" fill="#FFC107"/>
  </svg>
);

export default GiraffeIconComponent;
