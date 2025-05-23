
import React from 'react';
import type { SVGProps } from 'react';

const BotIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <rect x="5" y="8" width="14" height="10" rx="2" fill="#A0AEC0"/> {/* Body */}
    <rect x="9" y="4" width="6" height="5" rx="1" fill="#718096"/> {/* Head */}
    <circle cx="10" cy="11" r="1.5" fill="#4299E1"/> {/* Eye 1 */}
    <circle cx="14" cy="11" r="1.5" fill="#4299E1"/> {/* Eye 2 */}
    <rect x="7" y="18" width="2" height="3" fill="#718096"/> {/* Leg 1 */}
    <rect x="15" y="18" width="2" height="3" fill="#718096"/> {/* Leg 2 */}
    <rect x="3" y="10" width="2" height="4" fill="#A0AEC0"/> {/* Arm 1 */}
    <rect x="19" y="10" width="2" height="4" fill="#A0AEC0"/> {/* Arm 2 */}
  </svg>
);

export default BotIconComponent;
