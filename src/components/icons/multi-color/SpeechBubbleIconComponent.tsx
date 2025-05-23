
import React from 'react';
import type { SVGProps } from 'react';

const SpeechBubbleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M4 4H20V16H10L6 20V16H4V4Z" fill="#E0E0E0"/>
    <path d="M5 5H19V15H10.5L7 18V15H5V5Z" fill="#F5F5F5"/>
  </svg>
);

export default SpeechBubbleIconComponent;
