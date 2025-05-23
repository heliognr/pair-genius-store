
import React from 'react';
import type { SVGProps } from 'react';

const MoonIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M21.64 13.5A9.953 9.953 0 0112 22C6.48 22 2 17.52 2 12S6.48 2 12 2c.34 0 .67.02 1 .05A9.965 9.965 0 0012 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c3.29 0 6.13-1.78 7.72-4.42A8.997 8.997 0 0121.64 13.5z" fill="#FFFDE7"/> {/* Pale yellow moon */}
    <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2c.34 0 .67.02 1 .05C12.33 2.02 12 3 12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c3.29 0 6.13-1.78 7.72-4.42.64.16 1.27.3 1.92.42A9.953 9.953 0 0112 22z" fill="#F0F4C3" opacity="0.5"/> {/* Slightly darker crater layer */}
  </svg>
);

export default MoonIconComponent;
