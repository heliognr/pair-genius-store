
import React from 'react';
import type { SVGProps } from 'react';

const CloverIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <ellipse cx="8" cy="8" rx="4" ry="5" transform="rotate(-45 8 8)" fill="#34D399"/> {/* Leaf 1 */}
    <ellipse cx="16" cy="8" rx="4" ry="5" transform="rotate(45 16 8)" fill="#34D399"/> {/* Leaf 2 */}
    <ellipse cx="8" cy="16" rx="4" ry="5" transform="rotate(45 8 16)" fill="#34D399"/> {/* Leaf 3 */}
    <ellipse cx="16" cy="16" rx="4" ry="5" transform="rotate(-45 16 16)" fill="#10B981"/> {/* Leaf 4 (optional 4th leaf, slightly darker) */}
    <path d="M12 12L10 18" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/> {/* Stem */}
  </svg>
);

export default CloverIconComponent;
