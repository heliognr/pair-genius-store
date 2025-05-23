
import React from 'react';
import type { SVGProps } from 'react';

const LobsterIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2L7 7L9 12L5 15L8 18L12 16L16 18L19 15L15 12L17 7L12 2Z" fill="#E53935"/>
    <path d="M12 4L8.5 7.5L10 11.5L7 14L9.5 16.5L12 15L14.5 16.5L17 14L14 11.5L15.5 7.5L12 4Z" fill="#F44336"/>
    <path d="M7 7L4 5M17 7L20 5" stroke="#B71C1C" strokeWidth="1.5"/>
    <circle cx="11" cy="6" r="0.5" fill="white"/> <circle cx="13" cy="6" r="0.5" fill="white"/>
  </svg>
);

export default LobsterIconComponent;
