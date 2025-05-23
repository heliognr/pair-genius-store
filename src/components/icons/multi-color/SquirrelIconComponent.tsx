
import React from 'react';
import type { SVGProps } from 'react';

const SquirrelIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10V16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16H12V10Z" fill="#92400E"/> {/* Body brown */}
    <path d="M15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19V16Z" fill="#EAB308"/> {/* Tail yellow-brown */}
    <path d="M17 13C17 11.5 16 10 15 10" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round"/> {/* Tail connection */}
    <path d="M9 10C9 8.34315 7.65685 7 6 7C4.34315 7 3 8.34315 3 10C3 11.6569 4.34315 13 6 13H9V10Z" fill="#FDE68A"/> {/* Head/chest light yellow */}
    <circle cx="7" cy="9" r="0.75" fill="#1C1917"/> {/* Eye */}
    <path d="M6 11L5 12" stroke="#1C1917" strokeWidth="1" strokeLinecap="round" /> {/* Nose */}
  </svg>
);

export default SquirrelIconComponent;
