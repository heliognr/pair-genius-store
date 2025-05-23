
import React from 'react';
import type { SVGProps } from 'react';

const ArmadilloIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="15" rx="8" ry="5" fill="#A1887F"/>
    <path d="M12 10C10 10 8 12 8 14H16C16 12 14 10 12 10Z" fill="#D7CCC8"/>
    <rect x="7" y="15" width="2" height="3" fill="#795548"/>
    <rect x="15" y="15" width="2" height="3" fill="#795548"/>
    <path d="M10 9L9 7M14 9L15 7" stroke="#795548" strokeWidth="1"/>
    <circle cx="11" cy="8" r="0.5" fill="black"/><circle cx="13" cy="8" r="0.5" fill="black"/>
  </svg>
);

export default ArmadilloIconComponent;
