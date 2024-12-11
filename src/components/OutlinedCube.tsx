interface OutlinedCubeProps {
  size?: number
}

export function OutlinedCube({ size = 24 }: OutlinedCubeProps) {
  return (
    <div 
      className="relative"
      style={{ 
        width: size, 
        height: size 
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-400"
      >
        {/* Outer square */}
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-[pulse_2s_ease-in-out_infinite]"
        />
        
        {/* Inner lines for 3D effect */}
        <line
          x1="4"
          y1="4"
          x2="8"
          y2="0"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="4"
          x2="24"
          y2="0"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="20"
          x2="24"
          y2="16"
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Top square */}
        <rect
          x="8"
          y="0"
          width="16"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-30"
        />
      </svg>
    </div>
  )
}
