
import React from 'react';
import type { SVGProps } from 'react';

const IbisIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2L5 10H8L12 18L16 10H19L12 2Z" fill="#FFFFFF"/>
    <path d="M12 18V22M10 20H14" stroke="#000000" strokeWidth="1"/>
    <path d="M12 2C10 4 8 5 7 6C6 7 5 8 5 10" stroke="#E53935" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default IbisIconComponent;
