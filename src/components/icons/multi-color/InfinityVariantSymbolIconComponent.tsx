
import React from 'react';
import type { SVGProps } from 'react';

const InfinityVariantSymbolIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M8 10L4 14H8V10ZM16 10L20 14H16V10Z M12 4L8 8H16L12 4Z" fill="#AB47BC"/>
    <path d="M10 15H14V19L10 15Z" stroke="#7B1FA2" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default InfinityVariantSymbolIconComponent;
