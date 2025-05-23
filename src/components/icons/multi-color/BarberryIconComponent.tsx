
import React from 'react';
import type { SVGProps } from 'react';

const BarberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="3" ry="5" fill="#C62828"/>
    <path d="M12 7L11.5 4L13 5.5" stroke="#7CB342" strokeWidth="1" fill="none"/>
  </svg>
);

export default BarberryIconComponent;
