import { motion } from 'framer-motion'

interface NavbarCubeProps {
  size?: 'small' | 'normal'
}

export function NavbarCube({ size = 'normal' }: NavbarCubeProps) {
  const dimensions = size === 'small' ? 'w-6 h-6' : 'w-10 h-10'
  
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${dimensions} relative group`}
    >
      <div className={`${dimensions} relative z-10`}>
        <img 
          src="https://media.discordapp.net/attachments/1284959665679237215/1312836114951962654/logo_for_Enzonic_productions-modified-1.jpg"
          alt="Enzonic Logo"
          className={`${dimensions} rounded-lg border-2 border-emerald-400/30 
                     shadow-lg shadow-emerald-400/20 group-hover:border-emerald-400/50
                     transition-colors duration-300`}
        />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 -z-10 blur-md bg-emerald-400/20 
                      rounded-lg group-hover:bg-emerald-400/30 
                      transition-colors duration-300`} />
    </motion.div>
  )
}
