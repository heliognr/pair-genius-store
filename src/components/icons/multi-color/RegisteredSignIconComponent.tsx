
import React from 'react';
import type { SVGProps } from 'react';

const RegisteredSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" stroke="#455A64" strokeWidth="2.5" fill="none"/>
    <path d="M10 7H12C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13H10V7Z M10 13L14 17" stroke="#78909C" strokeWidth="2" fill="none"/>
  </svg>
);

export default RegisteredSignIconComponent;
