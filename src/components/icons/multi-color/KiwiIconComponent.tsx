
import React from 'react';
import type { SVGProps } from 'react';

const KiwiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Outer skin */}
    <ellipse cx="12" cy="12" rx="8" ry="6" fill="#8D6E63"/> {/* Brown skin */}
    {/* Inner flesh */}
    <ellipse cx="12" cy="12" rx="6" ry="4.5" fill="#AED581"/> {/* Green flesh */}
    {/* White core */}
    <ellipse cx="12" cy="12" rx="2" ry="1.5" fill="#FFFFFF"/>
    {/* Seeds */}
    <circle cx="11" cy="11" r="0.5" fill="#3E2723"/>
    <circle cx="13" cy="11" r="0.5" fill="#3E2723"/>
    <circle cx="11" cy="13" r="0.5" fill="#3E2723"/>
    <circle cx="13" cy="13" r="0.5" fill="#3E2723"/>
    <circle cx="12" cy="10.5" r="0.5" fill="#3E2723"/>
    <circle cx="12" cy="13.5" r="0.5" fill="#3E2723"/>
    <circle cx="10.5" cy="12" r="0.5" fill="#3E2723"/>
    <circle cx="13.5" cy="12" r="0.5" fill="#3E2723"/>
  </svg>
);

export default KiwiIconComponent;
