
import React from 'react';
import type { SVGProps } from 'react';

const CryingIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="10" fill="#FBBF24"/> {/* Yellow face */}
    {/* Eyes */}
    <circle cx="9" cy="10" r="1.5" fill="#1F2937"/>
    <circle cx="15" cy="10" r="1.5" fill="#1F2937"/>
    {/* Frown */}
    <path d="M8 16C8 16 9.5 13.5 12 13.5C14.5 13.5 16 16 16 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Tears */}
    <path d="M9 12L8 15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 12L16 15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.5 14.5L7 16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 14.5L17 16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default CryingIconComponent;
