
import React from 'react';
import type { SVGProps } from 'react';

const AlienIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Head */}
    <ellipse cx="12" cy="10" rx="7" ry="5" fill="#AED581"/> {/* Light green head */}
    {/* Body (neck) */}
    <rect x="10" y="14" width="4" height="4" fill="#AED581"/>
    {/* Eyes */}
    <ellipse cx="9" cy="9" rx="2" ry="3" fill="#000000"/>
    <ellipse cx="15" cy="9" rx="2" ry="3" fill="#000000"/>
    {/* Mouth */}
    <line x1="10" y1="13" x2="14" y2="13" stroke="#689F38" strokeWidth="1" strokeLinecap="round"/>
    {/* Antennae (optional) */}
    <line x1="12" y1="5" x2="12" y2="3" stroke="#8BC34A" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="12" cy="2.5" r="0.5" fill="#8BC34A"/>
  </svg>
);

export default AlienIconComponent;
