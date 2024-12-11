import { motion } from 'framer-motion'
import { FloatingBubbles } from './FloatingBubbles'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black" id="home">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to{' '}
              <span className="gradient-text">Enzonic</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Empowering individuals and businesses with innovative, affordable, and accessible services and resources.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Explore Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-4 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M600,112C268.6,112,0,75.3,0,32V120H1200V32C1200,75.3,931.4,112,600,112Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  )
}
