
import React from 'react';
import type { SVGProps } from 'react';

const JuneberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="4" fill="#D81B60"/>
    <path d="M12 8L11.8 6L12.2 7L12 8Z" fill="#F06292"/>
  </svg>
);

export default JuneberryIconComponent;
