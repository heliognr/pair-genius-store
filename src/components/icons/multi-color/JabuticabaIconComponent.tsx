
import React from 'react';
import type { SVGProps } from 'react';

const JabuticabaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="5" fill="#311B92"/>
    <circle cx="12" cy="12" r="3" fill="#4527A0"/>
    <path d="M12 7L11.5 5L12.5 6" stroke="#7E57C2" strokeWidth="0.5" fill="none"/>
  </svg>
);

export default JabuticabaIconComponent;
