
import React from 'react';
import type { SVGProps } from 'react';

const AxolotlIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="15" rx="6" ry="3" fill="#FFC0CB"/>
    <path d="M10 13L8 10M14 13L16 10" stroke="#F8BBD0" strokeWidth="1"/>
    <path d="M12 17L10 20H14L12 17Z" fill="#FF80AB"/>
    <circle cx="11" cy="14.5" r="0.5" fill="black"/>
    <circle cx="13" cy="14.5" r="0.5" fill="black"/>
  </svg>
);

export default AxolotlIconComponent;
