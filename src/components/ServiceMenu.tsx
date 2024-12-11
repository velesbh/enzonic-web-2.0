import { motion } from 'framer-motion'
import { Server, Network, Brain, Video, Music } from 'lucide-react'

const services = [
  {
    icon: <Server size={20} />,
    title: 'Hosting',
    description: 'High-performance hosting solutions',
    href: '#hosting'
  },
  {
    icon: <Network size={20} />,
    title: 'Network',
    description: 'Create and share minigames',
    href: '#network'
  },
  {
    icon: <Brain size={20} />,
    title: 'AI',
    description: 'Advanced AI solutions',
    href: '#ai'
  },
  {
    icon: <Video size={20} />,
    title: 'Meet',
    description: 'Professional video conferencing',
    href: 'https://meet.enzonic.com'
  },
  {
    icon: <Music size={20} />,
    title: 'Aurora',
    description: 'Copyright free music library',
    href: 'https://aurora.enzonic.com'
  }
]

interface ServiceMenuProps {
  onClose: () => void
}

export function ServiceMenu({ onClose }: ServiceMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-0 top-full mt-2 w-64 bg-black/80 backdrop-blur-lg rounded-xl border border-emerald-500/20 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="p-2">
        {services.map((service, index) => (
          <motion.a
            key={index}
            href={service.href}
            target={service.href.startsWith('http') ? "_blank" : undefined}
            rel={service.href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors"
            whileHover={{ x: 5 }}
          >
            <div className="text-emerald-400 mt-1">
              {service.icon}
            </div>
            <div>
              <h3 className="font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
