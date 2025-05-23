
import React from 'react';
import type { SVGProps } from 'react';

const OctopusIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="10" r="5" fill="#E91E63"/>
    <path d="M12 15C10 20 7 18 5 21" stroke="#AD1457" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M12 15C14 20 17 18 19 21" stroke="#AD1457" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M9 14C6 18 5 16 3 19" stroke="#AD1457" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M15 14C18 18 19 16 21 19" stroke="#AD1457" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="10.5" cy="9" r="1" fill="white"/> <circle cx="10.5" cy="9" r="0.5" fill="black"/>
    <circle cx="13.5" cy="9" r="1" fill="white"/> <circle cx="13.5" cy="9" r="0.5" fill="black"/>
  </svg>
);

export default OctopusIconComponent;
