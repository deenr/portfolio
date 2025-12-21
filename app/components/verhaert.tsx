export function Verhaert({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 0H20V100H0V0Z" fill="#3DB448" />
      <path d="M20 0H40V100H20V0Z" fill="#F2B81B" />
      <path d="M40 0H60V100H40V0Z" fill="#369BBB" />
      <path d="M60 0H80V100H60V0Z" fill="#E0472A" />
      <path d="M80 0H100V100H80V0Z" fill="#9D8CC0" />
    </svg>
  );
}
