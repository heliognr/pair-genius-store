
import React from 'react';
import type { SVGProps } from 'react';

const SproutIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M7 20h10v-2H7v2zm0-15a4.002 4.002 0 014-4h2a4.002 4.002 0 014 4v2H7V5z" fill="#A0522D"/> {/* Soil */}
    <path d="M12 18V9M10 11l2-2 2 2" stroke="#48BB78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Stem */}
    <path d="M12 9C10.343 9 9 7.657 9 6s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#68D391"/> {/* Top Leaf */}
    <path d="M8 11c0-1.1.9-2 2-2s2 .9 2 2" fill="#48BB78"/> {/* Side leaf 1 */}
    <path d="M14 11c0-1.1.9-2 2-2s2 .9 2 2" fill="#48BB78"/> {/* Side leaf 2 */}
  </svg>
);

export default SproutIconComponent;
