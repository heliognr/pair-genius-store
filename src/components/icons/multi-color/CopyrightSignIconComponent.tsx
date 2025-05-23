
import React from 'react';
import type { SVGProps } from 'react';

const CopyrightSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" stroke="#455A64" strokeWidth="2.5" fill="none"/>
    <path d="M14.5 9.5C14.5 8.12 13.38 7 12 7C10.62 7 9.5 8.12 9.5 9.5V14.5C9.5 15.88 10.62 17 12 17C13.38 17 14.5 15.88 14.5 14.5" stroke="#78909C" strokeWidth="2" fill="none"/>
  </svg>
);

export default CopyrightSignIconComponent;
