import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

export function Disclaimer() {
  return (
    <section className="py-12 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="cyber-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Info className="text-emerald-400 w-6 h-6" />
              <h2 className="text-xl font-semibold text-emerald-400">Disclaimer</h2>
            </div>
            <p className="text-gray-400">
              Enzonic.xyz is still a work in progress and will receive updates very frequently. 
              We appreciate your patience and support as we continue to improve our services.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
