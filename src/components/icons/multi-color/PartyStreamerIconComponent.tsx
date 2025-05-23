
import React from 'react';
import type { SVGProps } from 'react';

const PartyStreamerIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M4 4C8 8 4 12 8 16C12 20 16 16 20 20" stroke="#E91E63" strokeWidth="1.5" fill="none"/>
    <path d="M4 20C8 16 4 12 8 8C12 4 16 8 20 4" stroke="#F06292" strokeWidth="1.5" fill="none" opacity="0.7"/>
  </svg>
);

export default PartyStreamerIconComponent;
