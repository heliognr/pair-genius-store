
import React from 'react';
import type { SVGProps } from 'react';

const LlamaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M9 18V10C9 7 11 5 14 5C16 5 17 7 17 9L15 14H9Z" fill="#EFEBE9"/>
    <path d="M14 5L12 2L10 4" stroke="#D7CCC8" strokeWidth="1"/>
    <rect x="8" y="17" width="2" height="3" fill="#BCAAA4"/>
    <rect x="14" y="17" width="2" height="3" fill="#BCAAA4"/>
  </svg>
);

export default LlamaIconComponent;
