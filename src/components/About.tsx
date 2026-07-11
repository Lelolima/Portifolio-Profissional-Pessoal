'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Sobre Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl glass p-8 flex items-center justify-center">
                <div className="text-9xl">🚀</div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {profileData.about}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-400">Anos de Experiência</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-400">Projetos Entregues</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-400">Clientes Satisfeitos</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-400">Comprometimento</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}