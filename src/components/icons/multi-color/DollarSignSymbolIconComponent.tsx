
import React from 'react';
import type { SVGProps } from 'react';

const DollarSignSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <line x1="12" y1="2" x2="12" y2="22" stroke="#4CAF50" strokeWidth="2.5"/>
    <path d="M17 5H9.5C7.57 5 6 6.57 6 8.5C6 10.43 7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5C18 17.43 16.43 19 14.5 19H7" stroke="#8BC34A" strokeWidth="2.5" fill="none"/>
  </svg>
);

export default DollarSignSymbolIconComponent;
