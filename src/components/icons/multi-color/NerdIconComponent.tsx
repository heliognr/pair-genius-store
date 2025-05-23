
import React from 'react';
import type { SVGProps } from 'react';

const NerdIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Glasses */}
    <circle cx="8.5" cy="10" r="3" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1.5"/>
    <circle cx="15.5" cy="10" r="3" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1.5"/>
    <line x1="11.5" y1="10" x2="12.5" y2="10" stroke="#1F2937" strokeWidth="1.5"/> {/* Bridge */}
    {/* Pupils */}
    <circle cx="8.5" cy="10" r="1" fill="#1F2937"/>
    <circle cx="15.5" cy="10" r="1" fill="#1F2937"/>
    {/* Buck teeth smile */}
    <path d="M9 14H15V15H13V16H11V15H9V14Z" fill="#FFFFFF" stroke="#1F2937" strokeWidth="0.5"/>
    <line x1="12" y1="14" x2="12" y2="16" stroke="#1F2937" strokeWidth="0.5"/>
  </svg>
);

export default NerdIconComponent;
