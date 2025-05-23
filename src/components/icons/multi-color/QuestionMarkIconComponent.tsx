
import React from 'react';
import type { SVGProps } from 'react';

const QuestionMarkIconComponent: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" className={className} {...props}>
    <path d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z" fill="#42A5F5"/>
    <path d="M12 14.5C12 14.5 12 13 10 12C8 11 8 8.5 10 7C11.5 6 12.5 7 12.5 8.5C12.5 10 10.5 10.5 10.5 12" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default QuestionMarkIconComponent;
