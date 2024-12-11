import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { releasesData } from '../data/content'
import 'swiper/css'
import 'swiper/css/pagination'

export function LatestReleases() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-emerald-400">Releases</span>
          </h2>
          <p className="text-gray-400">Discover our newest innovations</p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {releasesData.map((release, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="curved-border p-6 h-full bg-black/40 backdrop-blur-sm"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-emerald-400">
                    {release.title}
                  </h3>
                  <p className="text-gray-400">{release.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{release.date}</span>
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                    >
                      Learn more <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="wave-divider" />
    </section>
  )
}
