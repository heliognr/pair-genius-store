
import React from 'react';
import type { SVGProps } from 'react';

const PlumIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="13" r="6" fill="#7E57C2"/> {/* Purple plum body */}
    <ellipse cx="11" cy="10" rx="1.5" ry="2.5" fill="#9575CD" transform="rotate(-20 11 10)"/> {/* Highlight */}
    {/* Stem */}
    <path d="M12 7L12.5 4L13.5 6" stroke="#795548" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default PlumIconComponent;
