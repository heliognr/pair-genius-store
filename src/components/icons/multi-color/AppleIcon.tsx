
import React from 'react';
import type { SVGProps } from 'react';

// This is an example multi-color SVG component for an Apple.
// You would replace this with your actual detailed multi-color SVG.
const AppleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" // Intrinsic width, will be scaled by className
    height="24" // Intrinsic height, will be scaled by className
    viewBox="0 0 24 24"
    fill="none" // Base SVG has no fill, colors are per-shape
    stroke="none" // Base SVG has no stroke, colors are per-shape
    className={className} // Applied from CardComponent for sizing
    {...props}
  >
    {/* Apple Body */}
    <circle cx="12" cy="13" r="7" fill="#D92E26" /> {/* Red apple */}
    {/* Stem */}
    <rect x="11" y="3" width="2" height="5" fill="#795548" /> {/* Brown stem */}
    {/* Leaf */}
    <path d="M14 6 Q16 3 19 4 Q17 7 14 6Z" fill="#4CAF50" /> {/* Green leaf */}
     {/* Highlight */}
    <ellipse cx="10" cy="10" rx="2" ry="3" fill="#FFC107" opacity="0.5" transform="rotate(-30 10 10)" />
  </svg>
);

export default AppleIconComponent;
