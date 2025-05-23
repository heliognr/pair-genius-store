
import React from 'react';
import type { SVGProps } from 'react';

const KoalaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="8" fill="#B0BEC5"/>
    <circle cx="8" cy="9" r="3" fill="#90A4AE"/>
    <circle cx="16" cy="9" r="3" fill="#90A4AE"/>
    <ellipse cx="12" cy="14" rx="2.5" ry="2" fill="#78909C"/>
    <circle cx="11" cy="11" r="0.7" fill="black"/>
    <circle cx="13" cy="11" r="0.7" fill="black"/>
  </svg>
);

export default KoalaIconComponent;
