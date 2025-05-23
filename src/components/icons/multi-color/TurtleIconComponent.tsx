
import React from 'react';
import type { SVGProps } from 'react';

const TurtleIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <ellipse cx="12" cy="13" rx="8" ry="6" fill="#65A30D"/> {/* Shell - darker green */}
    <ellipse cx="12" cy="12.5" rx="7.5" ry="5.5" fill="#84CC16"/> {/* Shell highlight - lighter green */}
    <path d="M12 7C10 7 9 8 9 9.5C9 10.5 10 11 11 11H13C14 11 15 10.5 15 9.5C15 8 14 7 12 7Z" fill="#A3E635"/> {/* Head - lightest green */}
    <circle cx="11" cy="8.5" r="0.5" fill="#1C1917"/> {/* Eye 1 */}
    <circle cx="13" cy="8.5" r="0.5" fill="#1C1917"/> {/* Eye 2 */}
    <rect x="5" y="12" width="2" height="3" rx="1" fill="#A3E635"/> {/* Flipper 1 */}
    <rect x="17" y="12" width="2" height="3" rx="1" fill="#A3E635"/> {/* Flipper 2 */}
    <rect x="7" y="17" width="2" height="3" rx="1" fill="#A3E635"/> {/* Flipper 3 */}
    <rect x="15" y="17" width="2" height="3" rx="1" fill="#A3E635"/> {/* Flipper 4 */}
  </svg>
);

export default TurtleIconComponent;
