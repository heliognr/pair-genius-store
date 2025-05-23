
import React from 'react';
import type { SVGProps } from 'react';

const SpeakNoEvilMonkeyIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <circle cx="12" cy="11" r="6" fill="#A1887F"/>
    <ellipse cx="12" cy="11.5" rx="4" ry="3.5" fill="#D7CCC8"/>
    <circle cx="6" cy="10" r="2.5" fill="#795548"/> <circle cx="18" cy="10" r="2.5" fill="#795548"/>
    <circle cx="10.5" cy="10.5" r="0.8" fill="#000000"/> <circle cx="13.5" cy="10.5" r="0.8" fill="#000000"/>
    <rect x="9" y="13" width="6" height="2" rx="1" fill="#D7CCC8"/> {/* Hand over mouth */}
  </svg>
);

export default SpeakNoEvilMonkeyIconComponent;
