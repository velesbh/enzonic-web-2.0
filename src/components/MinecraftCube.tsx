import { motion } from 'framer-motion'

interface MinecraftCubeProps {
  size?: 'small' | 'normal' | 'large'
}

export function MinecraftCube({ size = 'normal' }: MinecraftCubeProps) {
  const dimensions = {
    small: 'w-8 h-8',
    normal: 'w-16 h-16',
    large: 'w-24 h-24'
  }[size]

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotateY: 180 }}
      transition={{ duration: 0.6 }}
      className={`${dimensions} relative perspective-1000`}
    >
      <div className="relative w-full h-full transform-style-3d">
        {/* Main cube face */}
        <div className="absolute inset-0 border-2 border-emerald-400 bg-black/30 rounded-lg 
                      backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,157,0.3)]">
          {/* Inner grid pattern */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px opacity-50">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-emerald-400/20" />
            ))}
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 blur-sm bg-emerald-400/20 rounded-lg" />
      </div>
    </motion.div>
  )
}
