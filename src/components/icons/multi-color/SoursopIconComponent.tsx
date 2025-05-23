
import React from 'react';
import type { SVGProps } from 'react';

const SoursopIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="7" ry="8" fill="#8FBC8F"/>
    <path d="M12 4L10 7L12 6L14 7L12 4Z" fill="#556B2F"/>
    <circle cx="10" cy="10" r="0.5" fill="#556B2F"/>
    <circle cx="14" cy="10" r="0.5" fill="#556B2F"/>
    <circle cx="11" cy="13" r="0.5" fill="#556B2F"/>
    <circle cx="13" cy="13" r="0.5" fill="#556B2F"/>
    <circle cx="12" cy="15" r="0.5" fill="#556B2F"/>
  </svg>
);

export default SoursopIconComponent;
