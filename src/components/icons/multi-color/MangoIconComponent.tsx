
import React from 'react';
import type { SVGProps } from 'react';

const MangoIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Mango Body */}
    <path d="M15.5 6C12 6 8 9 7 14C6.5 17 9 21 12.5 21C17 21 19 16.5 19 13C19 9 17.5 6 15.5 6Z" fill="#FF9800"/> {/* Orange part */}
    <path d="M15.5 6C16.5 6.5 17.5 8 17.5 10C17.5 12 16 13 15 13.5" fill="#FFB74D" /> {/* Lighter orange highlight */}
    <path d="M7 14C7.5 12 9.5 9.5 11.5 8.5" fill="#F44336" /> {/* Reddish blush */}
    {/* Stem */}
    <path d="M15 6L14 4L13 5" stroke="#795548" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default MangoIconComponent;
