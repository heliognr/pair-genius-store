
import React from 'react';
import type { SVGProps } from 'react';

const ClubIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="7" r="4" fill="#4CAF50"/> {/* Top circle */}
    <circle cx="7" cy="13" r="4" fill="#4CAF50"/> {/* Left circle */}
    <circle cx="17" cy="13" r="4" fill="#4CAF50"/> {/* Right circle */}
    <rect x="10" y="12" width="4" height="8" fill="#388E3C"/> {/* Stem */}
    <circle cx="12" cy="7" r="2" fill="#81C784"/> {/* Highlight Top */}
    <circle cx="7" cy="13" r="2" fill="#81C784"/> {/* Highlight Left */}
    <circle cx="17" cy="13" r="2" fill="#81C784"/> {/* Highlight Right */}
  </svg>
);

export default ClubIconComponent;
