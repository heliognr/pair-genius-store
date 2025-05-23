
import React from 'react';
import type { SVGProps } from 'react';

const FishIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
    <path d="M20.32,10.39A7.58,7.58,0,0,0,12,5.23,7.58,7.58,0,0,0,3.68,10.39a7.7,7.7,0,0,0,0,5.22A7.58,7.58,0,0,0,12,20.77a7.58,7.58,0,0,0,8.32-5.16,7.7,7.7,0,0,0,0-5.22Z" fill="#F97316"/> {/* Body - orange */}
    <path d="M12,5.23a7.56,7.56,0,0,0-4.13,1.4V19.37a7.56,7.56,0,0,0,4.13,1.4Z" fill="#FB923C"/> {/* Lighter orange side */}
    <path d="M20.32,10.39,15,13l5.32,2.61A7.69,7.69,0,0,0,20.32,10.39Z" fill="#EA580C"/> {/* Tail fin - darker orange */}
    <circle cx="8" cy="10.5" r="1.2" fill="#FFFFFF"/> {/* Eye white */}
    <circle cx="8.2" cy="10.3" r="0.6" fill="#1E293B"/> {/* Eye pupil */}
    <path d="M12 8L14 6" stroke="#FB923C" strokeWidth="1" strokeLinecap="round" /> {/* Fin line 1 */}
    <path d="M12 11L15 9" stroke="#FB923C" strokeWidth="1" strokeLinecap="round" /> {/* Fin line 2 */}
    <path d="M12 14L14 16" stroke="#FB923C" strokeWidth="1" strokeLinecap="round" /> {/* Fin line 3 */}
  </svg>
);

export default FishIconComponent;
