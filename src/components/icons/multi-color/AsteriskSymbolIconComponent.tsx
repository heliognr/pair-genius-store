
import React from 'react';
import type { SVGProps } from 'react';

const AsteriskSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 3L12 21" stroke="#FF5722"/>
    <path d="M19.0711 4.92893L4.92893 19.0711" stroke="#FF9800"/>
    <path d="M21 12L3 12" stroke="#FFC107"/>
    <path d="M19.0711 19.0711L4.92893 4.92893" stroke="#FFEB3B"/>
  </svg>
);

export default AsteriskSymbolIconComponent;
