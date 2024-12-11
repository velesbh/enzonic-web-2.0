import { motion } from 'framer-motion'

export function Vision() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Our <span className="text-emerald-400 neon-text">Vision</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Empowering individuals and businesses with innovative, affordable, and reliable technology solutions.
          </p>
        </motion.div>
      </div>
      <div className="curve-separator" />
    </section>
  )
}
