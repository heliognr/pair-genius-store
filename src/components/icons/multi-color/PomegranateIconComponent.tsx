
import React from 'react';
import type { SVGProps } from 'react';

const PomegranateIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="none"
    className={className}
    {...props}
  >
    {/* Body */}
    <circle cx="12" cy="13" r="7" fill="#C62828"/> {/* Deep red body */}
    {/* Crown */}
    <path d="M10 6L9 4H11L10 6Z" fill="#7F0000"/>
    <path d="M12 6L11 4H13L12 6Z" fill="#7F0000"/>
    <path d="M14 6L13 4H15L14 6Z" fill="#7F0000"/>
    <path d="M11 6.5L10 5H12L11 6.5Z" fill="#7F0000"/>
    <path d="M13 6.5L12 5H14L13 6.5Z" fill="#7F0000"/>
    {/* Seeds visible hint (optional) */}
    <circle cx="10" cy="13" r="0.7" fill="#FFCDD2"/>
    <circle cx="12" cy="14" r="0.7" fill="#FFCDD2"/>
    <circle cx="14" cy="13" r="0.7" fill="#FFCDD2"/>
  </svg>
);

export default PomegranateIconComponent;
