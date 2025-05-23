
import React from 'react';
import type { SVGProps } from 'react';

const DateFruitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="4" ry="7" fill="#8D6E63"/>
    <ellipse cx="12" cy="12" rx="3" ry="6" fill="#A1887F"/>
  </svg>
);

export default DateFruitIconComponent;
