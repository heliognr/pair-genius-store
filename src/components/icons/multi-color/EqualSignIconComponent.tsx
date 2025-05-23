
import React from 'react';
import type { SVGProps } from 'react';

const EqualSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="5" y="8" width="14" height="3" fill="#455A64"/>
    <rect x="5" y="13" width="14" height="3" fill="#607D8B"/>
  </svg>
);

export default EqualSignIconComponent;
