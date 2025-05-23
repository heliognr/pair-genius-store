
import React from 'react';
import type { SVGProps } from 'react';

const SunIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="6" fill="#FBBF24"/> {/* Yellow sun center */}
    <line x1="12" y1="2" x2="12" y2="5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 1 */}
    <line x1="12" y1="19" x2="12" y2="22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 2 */}
    <line x1="2" y1="12" x2="5" y2="12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 3 */}
    <line x1="19" y1="12" x2="22" y2="12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 4 */}
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 5 */}
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 6 */}
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 7 */}
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/> {/* Ray 8 */}
  </svg>
);

export default SunIconComponent;
