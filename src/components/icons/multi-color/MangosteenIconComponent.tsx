
import React from 'react';
import type { SVGProps } from 'react';

const MangosteenIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="13" r="6" fill="#4A148C"/>
    <path d="M10 7L9 5H11L10 7Z" fill="#388E3C"/>
    <path d="M14 7L13 5H15L14 7Z" fill="#388E3C"/>
    <path d="M12 6L11 4H13L12 6Z" fill="#388E3C"/>
    <circle cx="12" cy="13" r="3" fill="#F3E5F5"/>
  </svg>
);

export default MangosteenIconComponent;
