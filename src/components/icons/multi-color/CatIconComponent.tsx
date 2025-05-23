
import React from 'react';
import type { SVGProps } from 'react';

const CatIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#BDBDBD"/> {/* Grey body */}
    <path d="M9 10C7.89543 10 7 9.10457 7 8C7 6.89543 7.89543 6 9 6L10 7L9 10Z" fill="#424242"/> {/* Ear Left */}
    <path d="M15 10C16.1046 10 17 9.10457 17 8C17 6.89543 16.1046 6 15 6L14 7L15 10Z" fill="#424242"/> {/* Ear Right */}
    <circle cx="10" cy="12" r="1" fill="#FFFFFF"/> {/* Eye Left White */}
    <circle cx="10" cy="12" r="0.5" fill="#000000"/> {/* Eye Left Pupil */}
    <circle cx="14" cy="12" r="1" fill="#FFFFFF"/> {/* Eye Right White */}
    <circle cx="14" cy="12" r="0.5" fill="#000000"/> {/* Eye Right Pupil */}
    <path d="M12 15C11.5 15 11 14.5 11 14H13C13 14.5 12.5 15 12 15Z" fill="#F48FB1"/> {/* Nose */}
    <path d="M10 16C10 15.5 12 15 12 15C12 15 14 15.5 14 16" stroke="#424242" strokeWidth="0.5" strokeLinecap="round"/> {/* Mouth */}
  </svg>
);

export default CatIconComponent;
