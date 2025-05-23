
import React from 'react';
import type { SVGProps } from 'react';

const JellyfishIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M6 10C6 6 9 3 12 3C15 3 18 6 18 10V14H6V10Z" fill="#E1BEE7"/>
    <path d="M8 14L7 18M12 14L12 20M16 14L17 18" stroke="#CE93D8" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default JellyfishIconComponent;
