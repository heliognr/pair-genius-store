
import React from 'react';
import type { SVGProps } from 'react';

const FolderSolidIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M4 20H20V8H12L10 6H4V20Z" fill="#FFCA28"/>
    <path d="M4 8H20V6H10L8 4H4V8Z" fill="#FFB300"/>
  </svg>
);

export default FolderSolidIconComponent;
