
import React from 'react';
import type { SVGProps } from 'react';

const MonsteraDeliciosaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="6" ry="8" fill="#CDDC39"/>
    <circle cx="10" cy="9" r="0.5" fill="#AFB42B"/>
    <circle cx="14" cy="9" r="0.5" fill="#AFB42B"/>
    <circle cx="11" cy="15" r="0.5" fill="#AFB42B"/>
    <circle cx="13" cy="15" r="0.5" fill="#AFB42B"/>
  </svg>
);

export default MonsteraDeliciosaIconComponent;
