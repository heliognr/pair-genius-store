
import React from 'react';
import type { SVGProps } from 'react';

const CitrusIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="13" r="7" fill="#F59E0B"/> {/* Orange body */}
    <path d="M12 6L11 3H13L12 6Z" fill="#48BB78"/> {/* Small stem part */}
    <ellipse cx="12" cy="5" rx="3" ry="1.5" fill="#38A169"/> {/* Leaf */}
    <circle cx="10" cy="11" r="1" fill="#FFF"/> {/* Highlight */}
  </svg>
);

export default CitrusIconComponent;
