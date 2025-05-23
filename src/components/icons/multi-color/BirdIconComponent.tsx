
import React from 'react';
import type { SVGProps } from 'react';

const BirdIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7Z" fill="#4299E1"/> {/* Head - blue */}
    <path d="M12 11C8.13401 11 5 14.134 5 18H19C19 14.134 15.866 11 12 11Z" fill="#60A5FA"/> {/* Body - lighter blue */}
    <path d="M10 17L7 20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/> {/* Leg 1 - orange */}
    <path d="M14 17L17 20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/> {/* Leg 2 - orange */}
    <path d="M17 7.5L20 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/> {/* Tail/Wing - darker blue */}
    <circle cx="13.5" cy="7" r="0.75" fill="#1A202C"/> {/* Eye */}
    <path d="M15 9L16 8L17 9" fill="#FBBF24"/> {/* Beak - yellow */}
  </svg>
);

export default BirdIconComponent;
