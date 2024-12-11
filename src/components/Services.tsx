import { Server, Network, Brain, Video, Music } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'

const services = [
  {
    icon: <Server className="w-16 h-16" />,
    title: 'Enzonic Hosting',
    description: 'High-performance hosting solutions with unmatched reliability.',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    link: '#hosting'
  },
  {
    icon: <Network className="w-16 h-16" />,
    title: 'Enzonic Network',
    description: 'Create, share, and play amazing minigames in our growing network.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    link: '#network'
  },
  {
    icon: <Brain className="w-16 h-16" />,
    title: 'Enzonic AI',
    description: 'Advanced AI solutions for modern business challenges.',
    gradient: 'from-emerald-500/20 to-green-500/20',
    link: '#ai'
  },
  {
    icon: <Video className="w-16 h-16" />,
    title: 'Enzonic Meet',
    description: 'Professional video conferencing with crystal-clear quality.',
    gradient: 'from-emerald-500/20 to-blue-500/20',
    link: 'https://meet.enzonic.com'
  },
  {
    icon: <Music className="w-16 h-16" />,
    title: 'Aurora',
    description: 'Experience our copyright-free music library for your creative needs.',
    gradient: 'from-emerald-500/20 to-purple-500/20',
    link: 'https://aurora.enzonic.com'
  }
]

export function Services() {
  return (
    <section className="relative py-24" id="services">
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

        <div className="services-carousel ml-12 mt-8">
          <Swiper
            className="!overflow-visible"
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={40}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 }
            }}
          >
            {[...services, ...services].map((service, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div 
                    className={`bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20
                              transform transition-all duration-500 ${
                                isActive 
                                  ? 'scale-100 translate-y-0 opacity-100' 
                                  : 'scale-90 translate-y-4 opacity-50'
                              }`}
                  >
                    <div className="text-emerald-400 mb-6">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    
                    <motion.a
                      href={service.link}
                      target={service.link.startsWith('http') ? "_blank" : undefined}
                      rel={service.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-emerald-400"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Explore</span>
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
