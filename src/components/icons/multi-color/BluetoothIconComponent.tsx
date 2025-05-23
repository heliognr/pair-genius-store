
import React from 'react';
import type { SVGProps } from 'react';

const BluetoothIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m7 7 10 10-5 5V2l5 5L7 17" stroke="#2196F3"/>
  </svg>
);

export default BluetoothIconComponent;
