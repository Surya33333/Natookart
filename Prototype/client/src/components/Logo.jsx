export default function Logo({ className = "h-10 w-10" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="96" height="96" rx="20" fill="#7B1F3A"/>
      {/* Stylized NK monogram */}
      <path 
        d="M30 74V26h4.5l2.5 1.5L58 56.5V26h10v48h-4.5L40.5 44v30H30z" 
        fill="white"
      />
      <path 
        d="M55 26L70 26v1L46 73h-5l1-2L62 36V26h-7z" 
        fill="white" 
        opacity="0.85"
      />
    </svg>
  )
}
