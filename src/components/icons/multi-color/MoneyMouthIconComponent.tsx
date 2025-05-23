
import React from 'react';
import type { SVGProps } from 'react';

const MoneyMouthIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Eyes (dollar signs) */}
    <text x="7" y="12" fontSize="5" fill="#1F2937" fontWeight="bold">$</text>
    <text x="13" y="12" fontSize="5" fill="#1F2937" fontWeight="bold">$</text>
    {/* Mouth (green with dollar sign) */}
    <path d="M8 15C8 15 9.5 18 12 18C14.5 18 16 15 16 15H8Z" fill="#4CAF50"/>
    <text x="11" y="17.5" fontSize="3" fill="#FFFFFF" fontWeight="bold">$</text>
  </svg>
);

export default MoneyMouthIconComponent;
