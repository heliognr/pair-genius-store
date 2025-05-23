
import React from 'react';
import type { SVGProps } from 'react';

const KissMarkIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 5C9 5 7 7 7 9.5C7 12 12 17 12 17C12 17 17 12 17 9.5C17 7 15 5 12 5Z" fill="#FF80AB"/>
    <path d="M12 19C9 19 7 17 7 14.5C7 12 12 7 12 7C12 7 17 12 17 14.5C17 17 15 19 12 19Z" fill="#F48FB1"/>
  </svg>
);

export default KissMarkIconComponent;
