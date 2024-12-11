import { Mail, MessageSquare, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <footer className="bg-black/80 border-t border-emerald-500/20 py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">ENZONIC</h3>
            <p className="text-gray-400">
              Innovative technology solutions and creative productions for the modern digital age.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400"
              >
                <Mail size={16} />
                <a href="mailto:contact@enzonic.com">contact@enzonic.com</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400"
              >
                <MessageSquare size={16} />
                <a href="#discord" target="_blank" rel="noopener">Discord Community</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400"
              >
                <Globe size={16} />
                <a href="#projects" target="_blank" rel="noopener">Our Projects</a>
              </motion.li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#portfolio" className="text-gray-400 hover:text-emerald-400">Portfolio</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#team" className="text-gray-400 hover:text-emerald-400">Our Team</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#services" className="text-gray-400 hover:text-emerald-400">Services</a>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-emerald-500/10 text-center text-gray-400 text-sm">
          <p>© 2024 Enzonic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
