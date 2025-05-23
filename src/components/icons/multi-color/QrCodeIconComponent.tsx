
import React from 'react';
import type { SVGProps } from 'react';

const QrCodeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="4" y="4" width="6" height="6" fill="#212121"/>
    <rect x="14" y="4" width="6" height="6" fill="#212121"/>
    <rect x="4" y="14" width="6" height="6" fill="#212121"/>
    <rect x="5" y="5" width="4" height="4" fill="#FFFFFF"/>
    <rect x="15" y="5" width="4" height="4" fill="#FFFFFF"/>
    <rect x="5" y="15" width="4" height="4" fill="#FFFFFF"/>
    <rect x="11" y="4" width="2" height="2" fill="#424242"/>
    <rect x="14" y="11" width="2" height="2" fill="#424242"/>
    <rect x="11" y="14" width="2" height="2" fill="#424242"/>
    <rect x="17" y="11" width="3" height="3" fill="#616161"/>
    <rect x="11" y="17" width="3" height="3" fill="#616161"/>
  </svg>
);

export default QrCodeIconComponent;
