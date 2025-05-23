
import React from 'react';
import type { SVGProps } from 'react';

const FaceSavoringFoodIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
    <path d="M8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 14H15V16H9V14Z" fill="#E53935"/>
    <line x1="12" y1="14" x2="12" y2="16" stroke="#FCE4EC"/>
  </svg>
);

export default FaceSavoringFoodIconComponent;
