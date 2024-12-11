import { motion } from 'framer-motion'
import { Server, Network, Brain, Video } from 'lucide-react'

const services = [
  {
    icon: <Server className="w-12 h-12" />,
    title: 'Enzonic Hosting',
    description: 'High-performance hosting solutions with unmatched reliability.',
    gradient: 'from-emerald-500/20 to-cyan-500/20'
  },
  {
    icon: <Network className="w-12 h-12" />,
    title: 'Enzonic Network',
    description: 'Create, share, and play amazing minigames in our growing network.',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'Enzonic AI',
    description: 'Advanced AI solutions for modern business challenges.',
    gradient: 'from-emerald-500/20 to-green-500/20'
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: 'Enzonic Meet',
    description: 'Professional video conferencing with crystal-clear quality.',
    gradient: 'from-emerald-500/20 to-blue-500/20'
  }
]

export function ServicesCarousel() {
  return (
    <section className="relative py-24" id="services">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-emerald-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our range of innovative solutions designed to empower your digital journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative group rounded-2xl overflow-hidden`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Service content */}
              <div className="relative bg-black/40 backdrop-blur-sm p-8 h-full border border-emerald-500/20 rounded-2xl
                            group-hover:border-emerald-500/40 transition-colors duration-300">
                <div className="text-emerald-400 mb-6 transform-gpu transition-transform duration-300 
                              group-hover:scale-110 group-hover:rotate-12">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                
                {/* Explore link */}
                <motion.a
                  href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-emerald-400 mt-6 group-hover:text-emerald-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">Explore</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
    </section>
  )
}
