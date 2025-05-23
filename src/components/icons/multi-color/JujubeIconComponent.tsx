
import React from 'react';
import type { SVGProps } from 'react';

const JujubeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="4" ry="6" fill="#BF360C"/>
    <ellipse cx="12" cy="12" rx="3" ry="5" fill="#D84315"/>
    <path d="M12 6L11.8 4L12.2 5" stroke="#A1887F" strokeWidth="0.5" fill="none"/>
  </svg>
);

export default JujubeIconComponent;
