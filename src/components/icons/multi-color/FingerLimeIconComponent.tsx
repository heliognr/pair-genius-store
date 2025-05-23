
import React from 'react';
import type { SVGProps } from 'react';

const FingerLimeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="3" ry="7" fill="#8BC34A"/>
    <circle cx="12" cy="9" r="0.5" fill="#AED581"/>
    <circle cx="12" cy="12" r="0.5" fill="#AED581"/>
    <circle cx="12" cy="15" r="0.5" fill="#AED581"/>
  </svg>
);

export default FingerLimeIconComponent;
