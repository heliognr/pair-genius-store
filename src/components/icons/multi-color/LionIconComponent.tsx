
import React from 'react';
import type { SVGProps } from 'react';

const LionIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Mane */}
    <circle cx="12" cy="12" r="9" fill="#D2691E"/> {/* Brown mane */}
    <circle cx="12" cy="12" r="7" fill="#FFB74D"/> {/* Lighter mane inner */}
    {/* Face */}
    <circle cx="12" cy="12" r="5" fill="#FFD54F"/> {/* Yellow face */}
    {/* Ears */}
    <circle cx="8" cy="7" r="2" fill="#FFB74D"/>
    <circle cx="16" cy="7" r="2" fill="#FFB74D"/>
    {/* Eyes */}
    <circle cx="10" cy="11" r="1" fill="#000000"/>
    <circle cx="14" cy="11" r="1" fill="#000000"/>
    {/* Nose */}
    <path d="M12 13L11 15H13L12 13Z" fill="#A1887F"/>
  </svg>
);

export default LionIconComponent;
