
import React from 'react';
import type { SVGProps } from 'react';

const PuffinIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C7 2 4 6 4 10C4 14 7 18 10 20L12 22L14 20C17 18 20 14 20 10C20 6 17 2 12 2Z" fill="#212121"/>
    <path d="M10 20L12 18L14 20" fill="#FFFFFF"/>
    <path d="M10 10C8 10 7 9 7 7H17C17 9 16 10 14 10H10Z" fill="#FFFFFF"/>
    <path d="M9 7H15L12 4L9 7Z" fill="#FF9800"/>
  </svg>
);

export default PuffinIconComponent;
