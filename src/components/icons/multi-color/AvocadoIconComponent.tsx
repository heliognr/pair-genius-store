
import React from 'react';
import type { SVGProps } from 'react';

const AvocadoIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Outer skin */}
    <path d="M12 2C8 2 5 6 5 12C5 17 8 22 12 22C16 22 19 17 19 12C19 6 16 2 12 2Z" fill="#38761D"/> {/* Dark green skin */}
    {/* Flesh */}
    <path d="M12 4C9 4 6.5 7 6.5 12C6.5 16 9 20 12 20C15 20 17.5 16 17.5 12C17.5 7 15 4 12 4Z" fill="#A9D18E"/> {/* Light green flesh */}
    {/* Pit */}
    <circle cx="12" cy="13" r="3" fill="#8D6E63"/> {/* Brown pit */}
  </svg>
);

export default AvocadoIconComponent;
