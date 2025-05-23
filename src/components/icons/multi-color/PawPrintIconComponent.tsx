
import React from 'react';
import type { SVGProps } from 'react';

const PawPrintIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="8" cy="7" r="2.5" fill="#78350F"/> {/* Toe 1 - dark brown */}
    <circle cx="16" cy="7" r="2.5" fill="#78350F"/> {/* Toe 2 */}
    <circle cx="6" cy="13" r="2.5" fill="#A16207"/> {/* Toe 3 - medium brown */}
    <circle cx="18" cy="13" r="2.5" fill="#A16207"/> {/* Toe 4 */}
    <path d="M12 12C10 12 8 13.5 8 15.5C8 18.5 11 21 12 21C13 21 16 18.5 16 15.5C16 13.5 14 12 12 12Z" fill="#C27803"/> {/* Main pad - lighter brown */}
  </svg>
);

export default PawPrintIconComponent;
