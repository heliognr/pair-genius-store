
import React from 'react';
import type { SVGProps } from 'react';

const MutedSpeakerEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M10 4L4 8H2V16H4L10 20V4Z" fill="#90A4AE"/>
    <line x1="14" y1="9" x2="20" y2="15" stroke="#EF5350" strokeWidth="2"/>
    <line x1="20" y1="9" x2="14" y2="15" stroke="#EF5350" strokeWidth="2"/>
  </svg>
);

export default MutedSpeakerEmojiIconComponent;
