
import React from 'react';
import type { SVGProps } from 'react';

const CoconutIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="8" fill="#795548"/> {/* Brown outer shell */}
    <circle cx="12" cy="12" r="6" fill="#FFFFFF"/> {/* White flesh */}
    <circle cx="10.5" cy="10.5" r="1" fill="#4E342E"/> {/* Eye 1 */}
    <circle cx="13.5" cy="10.5" r="1" fill="#4E342E"/> {/* Eye 2 */}
    <circle cx="12" cy="13" r="1" fill="#4E342E"/> {/* Eye 3 (mouth) */}
  </svg>
);

export default CoconutIconComponent;
