import { SVGProps } from "react";

export function Verhaert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="100" 
      height="100" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_98_2265)">
        <path d="M0 0H20V100H0V0Z" fill="#3DB448"/>
        <path d="M20 0H40V100H20V0Z" fill="#F2B81B"/>
        <path d="M40 0H60V100H40V0Z" fill="#369BBB"/>
        <path d="M60 0H80V100H60V0Z" fill="#E0472A"/>
        <path d="M80 0H100V100H80V0Z" fill="#9D8CC0"/>
      </g>
      <defs>
        <clipPath id="clip0_98_2265">
          <rect width="100" height="100" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
