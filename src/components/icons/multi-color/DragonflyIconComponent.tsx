
import React from 'react';
import type { SVGProps } from 'react';

const DragonflyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="2" ry="8" fill="#4DB6AC"/>
    <ellipse cx="8" cy="10" rx="5" ry="2" fill="#80CBC4" transform="rotate(-15 8 10)"/>
    <ellipse cx="16" cy="10" rx="5" ry="2" fill="#80CBC4" transform="rotate(15 16 10)"/>
    <ellipse cx="7" cy="14" rx="5" ry="2" fill="#A7FFEB" transform="rotate(15 7 14)"/>
    <ellipse cx="17" cy="14" rx="5" ry="2" fill="#A7FFEB" transform="rotate(-15 17 14)"/>
    <circle cx="12" cy="5" r="1.5" fill="#00796B"/>
  </svg>
);

export default DragonflyIconComponent;
