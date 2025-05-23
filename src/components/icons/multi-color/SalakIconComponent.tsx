
import React from 'react';
import type { SVGProps } from 'react';

const SalakIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C9 2 6 6 6 10C6 16 12 22 12 22C12 22 18 16 18 10C18 6 15 2 12 2Z" fill="#795548"/>
    <path d="M12 4C10 4 8 7 8 10C8 14 12 19 12 19C12 19 16 14 16 10C16 7 14 4 12 4Z" fill="#A1887F"/>
    <line x1="10" y1="8" x2="14" y2="12" stroke="#6D4C41" strokeWidth="0.5"/>
    <line x1="14" y1="8" x2="10" y2="12" stroke="#6D4C41" strokeWidth="0.5"/>
  </svg>
);

export default SalakIconComponent;
