import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { news } from '../config/content'

export function News() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % news.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative bg-black/40 backdrop-blur-lg" id="news">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Latest <span className="text-emerald-400">News</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {news.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-black/40 backdrop-blur-lg p-6 h-full rounded-lg border border-emerald-500/20"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-emerald-500 text-black text-sm font-semibold rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.excerpt}</p>
                      <div className="mt-auto flex justify-between items-center">
                        <time className="text-sm text-emerald-400">{item.date}</time>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                        >
                          Read more <ArrowRight size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {news.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-emerald-400' : 'bg-emerald-400/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
