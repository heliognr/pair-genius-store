
import React from 'react';
import type { SVGProps } from 'react';

const ElderberryIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="8" r="2" fill="#311B92"/> <circle cx="10" cy="11" r="2" fill="#311B92"/>
    <circle cx="14" cy="11" r="2" fill="#311B92"/> <circle cx="12" cy="14" r="2" fill="#311B92"/>
    <circle cx="9" cy="15" r="2" fill="#311B92"/> <circle cx="15" cy="15" r="2" fill="#311B92"/>
    <path d="M12 6V4L11 3" stroke="#4CAF50" strokeWidth="1" fill="none"/>
  </svg>
);

export default ElderberryIconComponent;
