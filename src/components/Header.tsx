import { Menu, X, HelpCircle, FileText, Github, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { storage } from '../utils/storage'
import { MinecraftCube } from './MinecraftCube'
import { ServiceMenu } from './ServiceMenu'
import { Link } from 'react-router-dom'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    
    const checkStorage = async () => {
      try {
        const availableSpace = await storage.checkSpace()
        if (availableSpace < 5) {
          await storage.clear()
          console.log('Storage cleared due to low space')
        }
      } catch (error) {
        console.warn('Storage check failed:', error)
      }
    }
    
    checkStorage()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { 
      icon: <HelpCircle size={20} />, 
      href: 'https://discord.gg/M4Dz3Gj5tR', 
      label: 'Support',
      external: true
    },
    { icon: <FileText size={20} />, href: '/tos', label: 'TOS' },
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/enzonic', 
      label: 'GitHub',
      external: true
    },
  ]

  const LOGO_URL = "https://media.discordapp.net/attachments/1284959665679237215/1312836114951962654/logo_for_Enzonic_productions-modified-1.jpg?ex=6759cee9&is=67587d69&hm=c17a64d5e35d6827c459f96f1602f4b130f105ab71333242d8467c5fcd3634bf&=&format=webp&width=655&height=655"

  return (
    <header className="fixed w-full top-4 z-50 px-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          mx-auto max-w-5xl rounded-full backdrop-blur-sm
          ${scrollPosition > 50 ? 'bg-black/30' : 'bg-black/10'}
          border border-emerald-500/10 px-6 py-4
          transition-all duration-300
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img 
                src={LOGO_URL}
                alt="Enzonic Logo"
                className="w-10 h-10 rounded-lg border-2 border-emerald-400/30"
              />
              <span className="text-2xl font-bold text-emerald-400">ENZONIC</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
                title={item.label}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {item.icon}
              </motion.a>
            ))}
            
            <div className="relative">
              <motion.button
                onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-emerald-400"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <MinecraftCube size="small" />
                <ChevronDown size={16} />
              </motion.button>
              
              <AnimatePresence>
                {isServiceMenuOpen && <ServiceMenu onClose={() => setIsServiceMenuOpen(false)} />}
              </AnimatePresence>
            </div>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-2"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
