import { motion } from 'framer-motion'
import { Code2, Users, Rocket } from 'lucide-react'

const values = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology solutions"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    description: "Building strong relationships with our users and partners"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Excellence",
    description: "Delivering the highest quality in everything we do"
  }
]

export function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">
              About <span className="text-emerald-400">Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We are a passionate team dedicated to creating innovative solutions that empower businesses 
              and individuals in the digital age.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-gray-400">
              Founded with a vision to revolutionize digital services, Enzonic has grown from a small 
              team of enthusiasts to a dynamic company at the forefront of technology innovation.
            </p>
            <p className="text-gray-400">
              We specialize in providing cutting-edge hosting solutions, network infrastructure, 
              AI technologies, and communication tools that help our clients succeed in the modern digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-emerald-500/20
                          hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
