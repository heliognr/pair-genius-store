
import React from 'react';
import type { SVGProps } from 'react';

const InfinityIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M10 12C10 14.2091 11.7909 16 14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8C11.7909 8 10 9.79086 10 12ZM10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C8.20914 16 10 14.2091 10 12Z" stroke="#673AB7" strokeWidth="2.5" fill="none"/>
    <path d="M10 12C10 14.2091 11.7909 16 14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8" stroke="#9575CD" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default InfinityIconComponent;
