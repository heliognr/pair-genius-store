
import React from 'react';
import type { SVGProps } from 'react';

const PigIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="none"
    className={className}
    {...props}
  >
    {/* Body */}
    <ellipse cx="12" cy="14" rx="7" ry="5" fill="#FFC0CB"/> {/* Pink body */}
    {/* Head */}
    <circle cx="12" cy="9" r="4" fill="#FFB6C1"/> {/* Lighter pink head */}
    {/* Ears */}
    <path d="M8 6L7 4L9 5L8 6Z" fill="#FFA07A"/> {/* Salmon pink ear */}
    <path d="M16 6L17 4L15 5L16 6Z" fill="#FFA07A"/> {/* Salmon pink ear */}
    {/* Snout */}
    <ellipse cx="12" cy="10" rx="2" ry="1.5" fill="#FA8072"/> {/* Darker salmon snout */}
    {/* Nostrils */}
    <circle cx="11.5" cy="10" r="0.3" fill="#4A0404"/>
    <circle cx="12.5" cy="10" r="0.3" fill="#4A0404"/>
    {/* Eyes */}
    <circle cx="10" cy="8" r="0.5" fill="#000000"/>
    <circle cx="14" cy="8" r="0.5" fill="#000000"/>
    {/* Tail */}
    <path d="M19 14C20 13 21 13 21 14C21 15 20 16 19 15" stroke="#FFB6C1" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

export default PigIconComponent;
