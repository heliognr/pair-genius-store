
import React from 'react';
import type { SVGProps } from 'react';

const AckeeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C8 2 6 6 6 10C6 12 7 14 9 15L12 20L15 15C17 14 18 12 18 10C18 6 16 2 12 2Z" fill="#E64A19"/>
    <path d="M12 10C10 10 9 11.5 9 13.5C9 15.5 10.5 17 12 17C13.5 17 15 15.5 15 13.5C15 11.5 14 10 12 10Z" fill="#FFF3E0"/>
    <circle cx="12" cy="13.5" r="1" fill="#212121"/>
  </svg>
);

export default AckeeIconComponent;
