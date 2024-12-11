import { Cpu, Shield, Wifi, Zap } from 'lucide-react'

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Advanced AI',
    description: 'Next-generation artificial intelligence solutions for your business needs.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cyber Security',
    description: 'Protected by state-of-the-art security protocols and encryption.'
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'IoT Integration',
    description: 'Seamless connection between devices and smart systems.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Quick Deploy',
    description: 'Rapid deployment of solutions with maximum efficiency.'
  }
]

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-emerald-400 neon-text">Core</span> Features
          </h2>
          <p className="text-gray-400">Empowering your digital transformation</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cyber-border feature-card relative rounded-lg hover:bg-black/50 transition-colors group"
            >
              <div className="p-6">
                <div className="text-emerald-400 mb-4 transform transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
