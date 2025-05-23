
import React from 'react';
import type { SVGProps } from 'react';

const ManateeIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="8" ry="5" fill="#B0BEC5"/>
    <ellipse cx="7" cy="11" rx="2" ry="1.5" fill="#CFD8DC"/>
    <ellipse cx="17" cy="11" rx="2" ry="1.5" fill="#CFD8DC"/>
    <path d="M12 16L10 19H14L12 16Z" fill="#90A4AE"/>
  </svg>
);

export default ManateeIconComponent;
