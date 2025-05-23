
import React from 'react';
import type { SVGProps } from 'react';

const CameraEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="4" y="7" width="16" height="12" rx="2" fill="#78909C"/>
    <circle cx="12" cy="13" r="4" fill="#B0BEC5"/>
    <circle cx="12" cy="13" r="2" fill="#546E7A"/>
    <rect x="17" y="5" width="3" height="2" fill="#90A4AE"/>
  </svg>
);

export default CameraEmojiIconComponent;
