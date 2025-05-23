
import React from 'react';
import type { SVGProps } from 'react';

const RatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 6C9 6 7 8 7 11V15C7 18 9 20 12 20C15 20 17 18 17 15V11C17 8 15 6 12 6Z" fill="#71717A"/> {/* Body - gray */}
    <ellipse cx="12" cy="10" rx="3" ry="2" fill="#A1A1AA"/> {/* Head - lighter gray */}
    <circle cx="10.5" cy="9.5" r="0.7" fill="#18181B"/> {/* Eye left */}
    <circle cx="13.5" cy="9.5" r="0.7" fill="#18181B"/> {/* Eye right */}
    <path d="M12 12.5L11.5 13.5L12.5 13.5L12 12.5Z" fill="#F1F5F9"/> {/* Nose/Snout - off-white */}
    <path d="M9 7.5C9 6.5 9.5 5.5 10.5 5.5C11.5 5.5 12 6.5 12 7.5" fill="#F472B6"/> {/* Ear left - pink */}
    <path d="M15 7.5C15 6.5 14.5 5.5 13.5 5.5C12.5 5.5 12 6.5 12 7.5" fill="#F472B6"/> {/* Ear right - pink */}
    <path d="M17 13L21 15" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round"/> {/* Tail */}
  </svg>
);

export default RatIconComponent;
