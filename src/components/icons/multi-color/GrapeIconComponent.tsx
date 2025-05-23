
import React from 'react';
import type { SVGProps } from 'react';

const GrapeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <circle cx="12" cy="10" r="2" fill="#805AD5"/> {/* Grape 1 */}
    <circle cx="10" cy="13" r="2" fill="#6B46C1"/> {/* Grape 2 */}
    <circle cx="14" cy="13" r="2" fill="#6B46C1"/> {/* Grape 3 */}
    <circle cx="12" cy="16" r="2" fill="#805AD5"/> {/* Grape 4 */}
    <circle cx="9" cy="17" r="2" fill="#553C9A"/>  {/* Grape 5 */}
    <circle cx="15" cy="17" r="2" fill="#553C9A"/>  {/* Grape 6 */}
    <path d="M12 8V5" stroke="#48BB78" strokeWidth="1.5" strokeLinecap="round"/> {/* Stem */}
    <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5" fill="#38A169"/> {/* Leaf */}
  </svg>
);

export default GrapeIconComponent;
