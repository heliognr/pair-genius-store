
import type React from 'react';
import type { SVGProps } from 'react';
import { Volume2 } from 'lucide-react'; // Import base icon

// This component wraps Volume2 and adds a slash
const Volume2WithSlash: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Volume2 paths (approximated for simplicity, direct use of Lucide component is better if possible for accuracy) */}
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    {/* Slash */}
    <line x1="4" y1="4" x2="20" y2="20" strokeWidth="2.5" />
  </svg>
);

export default Volume2WithSlash;
