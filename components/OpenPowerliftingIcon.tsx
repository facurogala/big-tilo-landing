import React from 'react'

const OpenPowerliftingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" rx="6" fill="black" />
    <path
      d="M6 7 C6 7 6 17 6 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18 7 C18 7 18 17 18 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10 7 L10 17"
      stroke="#dc2626"
      strokeWidth="3"
      strokeLinecap="square"
    />
    <path
      d="M14 7 L14 17"
      stroke="#dc2626"
      strokeWidth="3"
      strokeLinecap="square"
    />
    <path
      d="M18 7 C18 7 18 17 18 17 C18 19.5 15.5 19.5 15.5 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

export default OpenPowerliftingIcon

