
import React from 'react';
import type { SVGProps } from 'react';

const BearIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="8" fill="#8D6E63"/> {/* Brown head */}
    {/* Ears */}
    <circle cx="7" cy="7" r="3" fill="#A1887F"/> {/* Lighter brown ear */}
    <circle cx="17" cy="7" r="3" fill="#A1887F"/> {/* Lighter brown ear */}
    {/* Muzzle */}
    <ellipse cx="12" cy="14" rx="4" ry="3" fill="#A1887F"/> {/* Lighter brown muzzle */}
    {/* Eyes */}
    <circle cx="10" cy="11" r="1" fill="#000000"/>
    <circle cx="14" cy="11" r="1" fill="#000000"/>
    {/* Nose */}
    <ellipse cx="12" cy="13.5" rx="1.5" ry="1" fill="#5D4037"/> {/* Darker brown nose */}
  </svg>
);

export default BearIconComponent;
