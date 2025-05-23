
import React from 'react';
import type { SVGProps } from 'react';

const BinaryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M6 20h4M14 20h4M6 14h4v6M14 4h4v6M6 4h4v6M14 14h4v6" stroke="#455A64"/>
    <text x="8" y="10" fill="#607D8B" fontSize="5">0</text>
    <text x="16" y="10" fill="#607D8B" fontSize="5">1</text>
  </svg>
);

export default BinaryIconComponent;
