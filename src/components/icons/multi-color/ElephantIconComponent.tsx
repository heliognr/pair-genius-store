
import React from 'react';
import type { SVGProps } from 'react';

const ElephantIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="10" r="6" fill="#9E9E9E"/> {/* Grey head */}
    {/* Ears */}
    <path d="M6 10C3 8 3 14 6 12" fill="#B0BEC5"/> {/* Left ear */}
    <path d="M18 10C21 8 21 14 18 12" fill="#B0BEC5"/> {/* Right ear */}
    {/* Trunk */}
    <path d="M12 15C12 15 10 22 14 20C16 19 13 15 12 15Z" fill="#78909C"/> {/* Trunk */}
    {/* Eyes */}
    <circle cx="10" cy="9" r="0.8" fill="#000000"/>
    <circle cx="14" cy="9" r="0.8" fill="#000000"/>
    {/* Tusks (optional) */}
    <path d="M9 15C8 16 7 16 7 15" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round"/>
    <path d="M15 15C16 16 17 16 17 15" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default ElephantIconComponent;
