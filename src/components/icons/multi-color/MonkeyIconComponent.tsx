
import React from 'react';
import type { SVGProps } from 'react';

const MonkeyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Head */}
    <circle cx="12" cy="11" r="6" fill="#A1887F"/> {/* Brown head */}
    {/* Face */}
    <ellipse cx="12" cy="11.5" rx="4" ry="3.5" fill="#D7CCC8"/> {/* Light beige face */}
    {/* Ears */}
    <circle cx="6" cy="10" r="2.5" fill="#795548"/> {/* Darker brown ear */}
    <circle cx="18" cy="10" r="2.5" fill="#795548"/> {/* Darker brown ear */}
    {/* Eyes */}
    <circle cx="10.5" cy="10.5" r="0.8" fill="#000000"/>
    <circle cx="13.5" cy="10.5" r="0.8" fill="#000000"/>
    {/* Mouth */}
    <path d="M10.5 13C10.5 13 11 14 12 14C13 14 13.5 13 13.5 13" stroke="#5D4037" strokeWidth="0.7" strokeLinecap="round" fill="none"/>
    {/* Tail */}
    <path d="M16 17C18 17 20 15 20 12C20 9 18 7 17 7" stroke="#795548" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export default MonkeyIconComponent;
