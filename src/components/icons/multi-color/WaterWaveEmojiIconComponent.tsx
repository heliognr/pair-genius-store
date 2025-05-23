
import React from 'react';
import type { SVGProps } from 'react';

const WaterWaveEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M3 12C5 10 7 12 9 10C11 8 13 10 15 8C17 6 19 8 21 6" stroke="#2196F3" strokeWidth="2" fill="none"/>
    <path d="M3 16C5 14 7 16 9 14C11 12 13 14 15 12C17 10 19 12 21 10" stroke="#90CAF9" strokeWidth="2" fill="none"/>
  </svg>
);

export default WaterWaveEmojiIconComponent;
