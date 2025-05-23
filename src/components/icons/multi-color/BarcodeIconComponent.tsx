
import React from 'react';
import type { SVGProps } from 'react';

const BarcodeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="4" y="6" width="2" height="12" fill="#212121"/>
    <rect x="7" y="6" width="1" height="12" fill="#424242"/>
    <rect x="9" y="6" width="2" height="12" fill="#212121"/>
    <rect x="12" y="6" width="3" height="12" fill="#424242"/>
    <rect x="16" y="6" width="1" height="12" fill="#212121"/>
    <rect x="18" y="6" width="2" height="12" fill="#424242"/>
  </svg>
);

export default BarcodeIconComponent;
