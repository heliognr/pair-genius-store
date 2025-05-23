
import React from 'react';
import type { SVGProps } from 'react';

const ThumbsDownIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M7 14V5H4C3.44772 5 3 5.44772 3 6V13C3 13.5523 3.44772 14 4 14H7Z" fill="#FDBA74"/> {/* Wrist/palm part */}
    <path d="M7 14H12.5C13.8807 14 15 15.1193 15 16.5C15 17.8807 13.8807 19 12.5 19C11.1193 19 10 17.8807 10 16.5V14H7Z" fill="#FED7AA"/> {/* Thumb */}
    <path d="M7 14H17C18.1046 14 19 13.1046 19 12V9C19 7.89543 18.1046 7 17 7H7V14Z" fill="#FDBA74"/> {/* Fingers part */}
    <path d="M19 12H21V9H19" fill="#FDBA74"/> {/* Finger details */}
    <path d="M10 14C10 15 10.5 16 11.5 16C12.5 16 13 15 13 14" stroke="#EA580C" strokeWidth="1" strokeLinecap="round"/> {/* Thumb nail line */}
  </svg>
);

export default ThumbsDownIconComponent;
