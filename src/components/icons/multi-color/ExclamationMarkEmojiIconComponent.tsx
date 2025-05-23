
import React from 'react';
import type { SVGProps } from 'react';
// Reusing logic from ExclamationMarkIconComponent
const ExclamationMarkEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <rect x="10.5" y="4" width="3" height="10" rx="1.5" fill="#FF7043"/>
    <circle cx="12" cy="18" r="1.5" fill="#FF5722"/>
  </svg>
);

export default ExclamationMarkEmojiIconComponent;
