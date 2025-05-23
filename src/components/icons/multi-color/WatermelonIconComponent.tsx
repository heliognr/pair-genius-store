
import React from 'react';
import type { SVGProps } from 'react';

const WatermelonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#4CAF50"/> {/* Dark green rind */}
    <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#8BC34A"/> {/* Light green part */}
    <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" fill="#F44336"/> {/* Red flesh */}
    <circle cx="10" cy="10" r="0.8" fill="#3E2723"/> {/* Seed */}
    <circle cx="14" cy="10" r="0.8" fill="#3E2723"/> {/* Seed */}
    <circle cx="12" cy="13" r="0.8" fill="#3E2723"/> {/* Seed */}
    <circle cx="10" cy="15" r="0.8" fill="#3E2723"/> {/* Seed */}
    <circle cx="14" cy="15" r="0.8" fill="#3E2723"/> {/* Seed */}
  </svg>
);

export default WatermelonIconComponent;
