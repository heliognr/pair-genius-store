
import React from 'react';
import type { SVGProps } from 'react';

const LoveLetterIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="4" y="6" width="16" height="12" rx="2" fill="#FFF3E0"/>
    <polygon points="4,6 12,13 20,6" fill="#FFCCBC"/>
    <path d="M11 10L12 11L13 10" fill="#E57373"/> {/* Small heart */}
  </svg>
);

export default LoveLetterIconComponent;
