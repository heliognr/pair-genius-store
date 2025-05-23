
import React from 'react';
import type { SVGProps } from 'react';

const RecycleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M8 14L4 10H8V14Z" fill="#4CAF50"/>
    <path d="M16 14H20L16 10V14Z" fill="#66BB6A"/>
    <path d="M12 4L16 8H8L12 4Z" fill="#81C784"/>
    <path d="M10 15H14V19L10 15Z" stroke="#388E3C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default RecycleIconComponent;
