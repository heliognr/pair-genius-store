
import React from 'react';
import type { SVGProps } from 'react';

// Ladybug
const BugIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <ellipse cx="12" cy="13" rx="7" ry="8" fill="#EF4444"/> {/* Red body */}
    <path d="M12 5V21" stroke="#18181B" strokeWidth="1.5"/> {/* Black line down middle */}
    <rect x="10" y="3" width="4" height="3" rx="1" fill="#18181B" /> {/* Head */}
    <circle cx="9" cy="10" r="1.2" fill="#18181B"/> {/* Spot 1 */}
    <circle cx="15" cy="10" r="1.2" fill="#18181B"/> {/* Spot 2 */}
    <circle cx="9" cy="15" r="1.2" fill="#18181B"/> {/* Spot 3 */}
    <circle cx="15" cy="15" r="1.2" fill="#18181B"/> {/* Spot 4 */}
    <path d="M7 6L5 4M17 6L19 4" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round"/> {/* Antennae */}
  </svg>
);

export default BugIconComponent;
