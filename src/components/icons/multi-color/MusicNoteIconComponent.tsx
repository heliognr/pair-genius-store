
import React from 'react';
import type { SVGProps } from 'react';

const MusicNoteIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="8" cy="18" r="3" fill="#9C27B0"/>
    <path d="M11 18V6C11 4 13 3 15 4C17 5 17 7 15 8L11 7" stroke="#AB47BC" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M15 8H17" stroke="#CE93D8" strokeWidth="2"/>
  </svg>
);

export default MusicNoteIconComponent;
