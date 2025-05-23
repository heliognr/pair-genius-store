
import React from 'react';
import type { SVGProps } from 'react';

const AtSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" stroke="#607D8B" strokeWidth="2.5" fill="none"/>
    <path d="M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z M12 7V12H17" stroke="#78909C" strokeWidth="2" fill="none"/>
  </svg>
);

export default AtSignIconComponent;
