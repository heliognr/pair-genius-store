
import React from 'react';
import type { SVGProps } from 'react';

const StarfruitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FFEB3B"/>
    <polygon points="12 5 13.82 9.26 18 9.87 14.5 13.14 15.36 17.02 12 15.27 8.64 17.02 9.5 13.14 6 9.87 10.18 9.26 12 5" fill="#FDD835"/>
  </svg>
);

export default StarfruitIconComponent;
