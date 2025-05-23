
import React from 'react';
import type { SVGProps } from 'react';

const LimeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="7" fill="#8BC34A"/> {/* Lime green body */}
    <circle cx="10" cy="10" r="1.5" fill="#FFFFFF" opacity="0.7"/> {/* Highlight */}
    {/* Stem/leaf spot */}
    <path d="M12 5L11.5 3L12.5 3.5L12 5Z" fill="#689F38"/>
  </svg>
);

export default LimeIconComponent;
