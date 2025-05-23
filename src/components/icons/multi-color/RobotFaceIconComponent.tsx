
import React from 'react';
import type { SVGProps } from 'react';

// Re-using BotIconComponent as RobotFaceIconComponent, as they are very similar conceptually for this context.
const RobotFaceIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <rect x="9" y="15" width="6" height="1" fill="#718096"/> {/* Mouth */}
  </svg>
);


export default RobotFaceIconComponent;
