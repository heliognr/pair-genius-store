
import React from 'react';
import type { SVGProps } from 'react';

const BalloonEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="10" rx="6" ry="8" fill="#FF7043"/>
    <path d="M12 18L11 22H13L12 18Z" fill="#E64A19"/>
    <path d="M10 8C9.5 7.5 9 7 8.5 6.5" stroke="#FFCCBC" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default BalloonEmojiIconComponent;
