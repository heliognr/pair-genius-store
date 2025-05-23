
import React from 'react';
import type { SVGProps } from 'react';

const HashtagIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <line x1="7" y1="3" x2="5" y2="21" stroke="#607D8B" strokeWidth="2.5"/>
    <line x1="19" y1="3" x2="17" y2="21" stroke="#607D8B" strokeWidth="2.5"/>
    <line x1="3" y1="8" x2="21" y2="10" stroke="#78909C" strokeWidth="2.5"/>
    <line x1="3" y1="14" x2="21" y2="16" stroke="#78909C" strokeWidth="2.5"/>
  </svg>
);

export default HashtagIconComponent;
