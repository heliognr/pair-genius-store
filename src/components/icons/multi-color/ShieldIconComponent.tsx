
import React from 'react';
import type { SVGProps } from 'react';

const ShieldIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2L3 6V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V6L12 2Z" fill="#9CA3AF"/> {/* Gray shield body */}
    <path d="M12 2L5 7V13C5 16.87 8.13 20 12 20C15.87 20 19 16.87 19 13V7L12 2Z" fill="#6B7280"/> {/* Darker gray inner shield */}
    <path d="M12 6L10 10H14L12 6Z" fill="#F87171"/> {/* Small red emblem */}
  </svg>
);

export default ShieldIconComponent;
