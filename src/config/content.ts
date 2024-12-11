import { Server, Network, Brain, Video } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NewsItem {
  date: string
  title: string
  category: string
  excerpt: string
}

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  link: string
}

export const news: NewsItem[] = [
  {
    date: 'March 15, 2024',
    title: 'Enzonic Partners with Major Tech Companies',
    category: 'Partnership',
    excerpt: 'Strategic partnerships to enhance our cloud infrastructure...'
  },
  {
    date: 'March 10, 2024',
    title: 'New AI Features Released',
    category: 'Product Update',
    excerpt: 'Introducing advanced AI capabilities to our platform...'
  },
  {
    date: 'March 5, 2024',
    title: 'Enzonic Community Growing Fast',
    category: 'Community',
    excerpt: 'Our user base has grown significantly in the past month...'
  }
]

export const services: ServiceItem[] = [
  {
    icon: Server,
    title: 'Enzonic Hosting',
    description: 'High-performance hosting solutions with unmatched reliability.',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    link: '/hosting'
  },
  {
    icon: Network,
    title: 'Enzonic Network',
    description: 'Create, share, and play amazing minigames in our growing network.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    link: '/network'
  },
  {
    icon: Brain,
    title: 'Enzonic AI',
    description: 'Advanced AI solutions for modern business challenges.',
    gradient: 'from-emerald-500/20 to-green-500/20',
    link: '/ai'
  },
  {
    icon: Video,
    title: 'Enzonic Meet',
    description: 'Professional video conferencing with crystal-clear quality.',
    gradient: 'from-emerald-500/20 to-blue-500/20',
    link: '/meet'
  }
]
