
import React from 'react';
import type { SVGProps } from 'react';

const TrademarkSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="9" stroke="#455A64" strokeWidth="2.5" fill="none"/>
    <path d="M8 7H16M12 7V17M9 12L12 17L15 12" stroke="#78909C" strokeWidth="2" fill="none"/>
  </svg>
);

export default TrademarkSignIconComponent;
