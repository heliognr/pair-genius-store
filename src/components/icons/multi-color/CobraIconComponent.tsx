
import React from 'react';
import type { SVGProps } from 'react';

const CobraIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 20C8 20 6 17 6 14C6 11 9 8 12 8C15 8 18 11 18 14C18 17 16 20 12 20Z" fill="#558B2F"/>
    <path d="M12 8C10 8 8 6 8 4H16C16 6 14 8 12 8Z" fill="#A5D6A7"/>
    <circle cx="11" cy="5" r="0.5" fill="red"/>
    <circle cx="13" cy="5" r="0.5" fill="red"/>
    <path d="M12 14L11 16H13L12 14Z" fill="#C8E6C9"/>
  </svg>
);

export default CobraIconComponent;
