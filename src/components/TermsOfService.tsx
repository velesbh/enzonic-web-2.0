import { motion } from 'framer-motion'
import { Mail, Shield, Book, Users, Code, Lock, RefreshCw, HelpCircle } from 'lucide-react'

const sections = [
  {
    icon: <Book />,
    title: "1. Introduction",
    content: "Welcome to Enzonic! These Terms of Service (\"Terms\") govern your use of our website and services. By accessing or using Enzonic, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our services."
  },
  {
    icon: <Users />,
    title: "2. Use of Services",
    content: "You agree to use Enzonic's services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could harm, disable, overburden, or impair our servers or networks."
  },
  {
    icon: <Shield />,
    title: "3. User Accounts",
    content: "To access certain features of our services, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."
  },
  {
    icon: <Code />,
    title: "4. Intellectual Property",
    content: "We are open source, but if you redeploy our services please credit us"
  },
  {
    icon: <Lock />,
    title: "5. Privacy",
    content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information."
  },
  {
    icon: <Shield />,
    title: "6. Limitation of Liability",
    content: "Enzonic shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our services, including but not limited to damages for loss of profits, data, or other intangible losses."
  },
  {
    icon: <RefreshCw />,
    title: "7. Changes to Terms",
    content: "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the new Terms."
  },
  {
    icon: <HelpCircle />,
    title: "8. Contact Us",
    content: "If you have any questions about these Terms, please contact us at admin@enzonic.xyz"
  }
]

export function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Terms of <span className="text-emerald-400">Service</span>
            </h1>
            <p className="text-gray-400">
              Last updated: March 2024
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-border p-6 rounded-lg bg-black/40 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 mt-1">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              For any additional questions, please contact us at{' '}
              <a 
                href="mailto:admin@enzonic.xyz" 
                className="text-emerald-400 hover:text-emerald-300"
              >
                admin@enzonic.xyz
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
