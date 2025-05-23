
import React from 'react';
import type { SVGProps } from 'react';

const BadgerIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="14" rx="7" ry="5" fill="#616161"/>
    <path d="M8 10H16V12H8V10Z" fill="#FFFFFF"/>
    <path d="M9 7H15L12 4L9 7Z" fill="#424242"/>
    <circle cx="10" cy="13" r="0.5" fill="black"/><circle cx="14" cy="13" r="0.5" fill="black"/>
    <rect x="7" y="17" width="2" height="2" fill="#424242"/>
    <rect x="15" y="17" width="2" height="2" fill="#424242"/>
  </svg>
);

export default BadgerIconComponent;
