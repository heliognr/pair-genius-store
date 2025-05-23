
import React from 'react';
import type { SVGProps } from 'react';

const RabbitIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="14" r="6" fill="#F8FAFC"/> {/* Body - white */}
    <circle cx="12" cy="9" r="3" fill="#E2E8F0"/> {/* Head - light gray */}
    <path d="M10 3L10 7" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round"/> {/* Ear 1 stalk - pink */}
    <ellipse cx="10" cy="3" rx="1.5" ry="3" fill="#F472B6"/> {/* Ear 1 top - pink */}
    <path d="M14 3L14 7" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round"/> {/* Ear 2 stalk - pink */}
    <ellipse cx="14" cy="3" rx="1.5" ry="3" fill="#F472B6"/> {/* Ear 2 top - pink */}
    <circle cx="11" cy="9" r="0.7" fill="#EF4444"/> {/* Eye 1 - red */}
    <circle cx="13" cy="9" r="0.7" fill="#EF4444"/> {/* Eye 2 - red */}
    <path d="M12 10.5L11.5 11L12.5 11L12 10.5Z" fill="#F472B6"/> {/* Nose - pink */}
    <path d="M16 18C16 19.1046 15.1046 20 14 20C12.8954 20 12 19.1046 12 18" fill="#E2E8F0"/> {/* Small tail */}
  </svg>
);

export default RabbitIconComponent;
