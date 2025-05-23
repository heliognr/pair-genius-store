
import React from 'react';
import type { SVGProps } from 'react';

const DogIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 4C9.23858 4 7 6.23858 7 9V14C7 16.7614 9.23858 19 12 19C14.7614 19 17 16.7614 17 14V9C17 6.23858 14.7614 4 12 4Z" fill="#A16207"/> {/* Main body brown */}
    <path d="M9 7C9 5.34315 10.3431 4 12 4V7H9Z" fill="#D97706"/> {/* Ear left - lighter brown */}
    <path d="M15 7C15 5.34315 13.6569 4 12 4V7H15Z" fill="#D97706"/> {/* Ear right - lighter brown */}
    <circle cx="10.5" cy="10.5" r="1" fill="#2D3748"/> {/* Eye left */}
    <circle cx="13.5" cy="10.5" r="1" fill="#2D3748"/> {/* Eye right */}
    <ellipse cx="12" cy="14.5" rx="1.5" ry="1" fill="#4A5568"/> {/* Nose */}
    <path d="M12 16C11 17 10 17 9 16.5" stroke="#4A5568" strokeWidth="1" strokeLinecap="round"/> {/* Mouth part */}
    <path d="M12 16C13 17 14 17 15 16.5" stroke="#4A5568" strokeWidth="1" strokeLinecap="round"/> {/* Mouth part */}
    <rect x="11" y="18" width="2" height="3" fill="#A16207" /> {/* Neck/Body indication */}
  </svg>
);

export default DogIconComponent;
