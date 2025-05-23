
import React from 'react';
import type { SVGProps } from 'react';

const HexagonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M17.66 4H6.34L2 10V14L6.34 20H17.66L22 14V10L17.66 4Z" fill="#8B5CF6"/> {/* Purple hexagon */}
    <path d="M17.66 4L6.34 4L2 10L6.34 20L17.66 20L22 10Z" fill="#A78BFA" fillOpacity="0.7"/> {/* Lighter purple highlight */}
  </svg>
);

export default HexagonIconComponent;
