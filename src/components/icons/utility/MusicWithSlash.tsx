
import type React from 'react';
import type { SVGProps } from 'react';
import { Music } from 'lucide-react'; // Import base icon

// This component wraps Music and adds a slash
const MusicWithSlash: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    {/* Music paths (approximated) */}
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
    {/* Slash */}
    <line x1="4" y1="4" x2="20" y2="20" strokeWidth="2.5" />
  </svg>
);

export default MusicWithSlash;
