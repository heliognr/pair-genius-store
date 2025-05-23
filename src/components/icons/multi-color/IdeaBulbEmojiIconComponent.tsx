
import React from 'react';
import type { SVGProps } from 'react';

const IdeaBulbEmojiIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 2C9 2 7 4 7 7C7 10 9 12 12 12C15 12 17 10 17 7C17 4 15 2 12 2Z" fill="#FFEB3B"/>
    <rect x="10" y="12" width="4" height="3" fill="#FFF9C4"/>
    <rect x="9" y="15" width="6" height="2" rx="1" fill="#BDBDBD"/>
  </svg>
);

export default IdeaBulbEmojiIconComponent;
