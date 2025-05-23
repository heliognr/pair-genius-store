
import React from 'react';
import type { SVGProps } from 'react';

const PineappleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Body */}
    <ellipse cx="12" cy="15" rx="6" ry="7" fill="#FFC107"/> {/* Yellow body */}
    {/* Body texture */}
    <line x1="9" y1="13" x2="15" y2="16" stroke="#E65100" strokeWidth="0.7"/>
    <line x1="15" y1="13" x2="9" y2="16" stroke="#E65100" strokeWidth="0.7"/>
    <line x1="9" y1="15" x2="15" y2="18" stroke="#E65100" strokeWidth="0.7"/>
    <line x1="15" y1="15" x2="9" y2="18" stroke="#E65100" strokeWidth="0.7"/>
    <line x1="10" y1="11.5" x2="14" y2="13.5" stroke="#E65100" strokeWidth="0.7"/>
    <line x1="14" y1="11.5" x2="10" y2="13.5" stroke="#E65100" strokeWidth="0.7"/>
    {/* Crown */}
    <path d="M12 2L10 7H14L12 2Z" fill="#4CAF50"/> {/* Leaf 1 */}
    <path d="M10 5L7 9H11L10 5Z" fill="#388E3C"/> {/* Leaf 2 */}
    <path d="M14 5L17 9H13L14 5Z" fill="#388E3C"/> {/* Leaf 3 */}
    <path d="M12 4L9 8H10L12 4Z" fill="#66BB6A"/> {/* Leaf 4 */}
    <path d="M12 4L15 8H14L12 4Z" fill="#66BB6A"/> {/* Leaf 5 */}
  </svg>
);

export default PineappleIconComponent;
