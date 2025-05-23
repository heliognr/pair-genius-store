
import React from 'react';
import type { SVGProps } from 'react';

const GenderNeutralSignIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="12" r="7" stroke="#7E57C2" strokeWidth="2.5" fill="none"/>
    <line x1="12" y1="5" x2="12" y2="2" stroke="#7E57C2" strokeWidth="2.5"/>
    <line x1="10" y1="2" x2="14" y2="2" stroke="#7E57C2" strokeWidth="2.5"/>
    <line x1="12" y1="19" x2="12" y2="22" stroke="#7E57C2" strokeWidth="2.5"/>
    <line x1="15" y1="19" x2="12" y2="22" stroke="#7E57C2" strokeWidth="2.5"/>
    <line x1="9" y1="19" x2="12" y2="22" stroke="#7E57C2" strokeWidth="2.5" transform="translate(0, -3)"/> {/* Simplified representation */}
  </svg>
);

export default GenderNeutralSignIconComponent;
