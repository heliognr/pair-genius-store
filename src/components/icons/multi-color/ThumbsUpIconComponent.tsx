
import React from 'react';
import type { SVGProps } from 'react';

const ThumbsUpIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M7 10V19H4C3.44772 19 3 18.5523 3 18V11C3 10.4477 3.44772 10 4 10H7Z" fill="#FDBA74"/> {/* Wrist/palm part - light skin tone */}
    <path d="M7 10H12.5C13.8807 10 15 8.88071 15 7.5C15 6.11929 13.8807 5 12.5 5C11.1193 5 10 6.11929 10 7.5V10H7Z" fill="#FED7AA"/> {/* Thumb - lighter skin tone */}
    <path d="M7 10H17C18.1046 10 19 10.8954 19 12V15C19 16.1046 18.1046 17 17 17H7V10Z" fill="#FDBA74"/> {/* Fingers part - light skin tone */}
    <path d="M19 12H21V15H19" fill="#FDBA74"/> {/* Finger details */}
    <path d="M10 10C10 9 10.5 8 11.5 8C12.5 8 13 9 13 10" stroke="#EA580C" strokeWidth="1" strokeLinecap="round"/> {/* Thumb nail line */}
  </svg>
);

export default ThumbsUpIconComponent;
