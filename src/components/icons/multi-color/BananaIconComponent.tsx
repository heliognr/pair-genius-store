
import React from 'react';
import type { SVGProps } from 'react';

// This is an example multi-color SVG component for a Banana.
// You would replace this with your actual detailed multi-color SVG.
const BananaIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Banana Body */}
    <path 
      d="M5.5,18.5 C5.5,18.5 9.5,12.5 14.5,12.5 C19.5,12.5 17.5,6.5 17.5,6.5 C17.5,6.5 13.5,12.5 8.5,12.5 C3.5,12.5 5.5,18.5 5.5,18.5Z" 
      fill="#FFEB3B" // Yellow banana
    />
    {/* Darker yellow for some shading or detail */}
    <path 
      d="M7.5,17.5 C7.5,17.5 10.5,13.5 14.5,13.5 C18.5,13.5 16.5,8.5 16.5,8.5" 
      stroke="#FBC02D" 
      strokeWidth="1"
      fill="none"
    />
    {/* Brown tip 1 */}
    <ellipse cx="17" cy="7" rx="1.5" ry="1" fill="#795548" />
    {/* Brown tip 2 */}
    <ellipse cx="6" cy="18" rx="1.5" ry="1" fill="#6D4C41" />
  </svg>
);

export default BananaIconComponent;
