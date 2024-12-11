import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '4.99',
    ram: '2GB',
    players: '10',
    features: [
      'Instant Setup',
      'Basic DDoS Protection',
      'Automated Backups',
      'Mod Support',
      '24/7 Support',
    ]
  },
  {
    name: 'Premium',
    price: '9.99',
    ram: '4GB',
    players: '25',
    featured: true,
    features: [
      'Instant Setup',
      'Advanced DDoS Protection',
      'Daily Backups',
      'Mod Support',
      'Priority Support',
      'Custom Domain',
      'Server Monitor Panel'
    ]
  },
  {
    name: 'Ultimate',
    price: '19.99',
    ram: '8GB',
    players: '50+',
    features: [
      'Instant Setup',
      'Enterprise DDoS Protection',
      'Hourly Backups',
      'Mod Support',
      'Priority Support',
      'Custom Domain',
      'Server Monitor Panel',
      'Database Access',
      'Dedicated IP'
    ]
  }
]

export function Pricing() {
  return (
    <section className="py-20" id="plans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Simple <span className="text-emerald-400 neon-text">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your Minecraft server
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`cyber-border feature-card relative rounded-lg ${
                plan.featured ? 'border-emerald-400/30 bg-black/40' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 text-center">
                  <span className="bg-emerald-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-emerald-400">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="text-lg font-semibold">
                    <p>{plan.ram} RAM</p>
                    <p>{plan.players} Players</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <Check size={18} className="text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.featured
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-black'
                      : 'border border-emerald-500/20 hover:bg-emerald-500/10'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
