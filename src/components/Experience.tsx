'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/profile'
import { FaBriefcase, FaCode, FaServer } from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FaCode,
  server: FaServer,
  briefcase: FaBriefcase,
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Experiência & Educação</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-blue-500" />

              {experience.map((item, index) => {
                const Icon = iconMap[item.icon] || FaCode
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-12 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-slate-900 glow z-10" />

                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-primary" />
                          <span className="text-sm text-primary font-medium">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                        <p className="text-primary-light mb-3">{item.company}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">
                Formação Acadêmica
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-lg font-bold mb-2">Ciência da Computação</h4>
                  <p className="text-primary-light mb-2">Universidade Federal</p>
                  <p className="text-gray-400 text-sm">2018 - 2022</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-lg font-bold mb-2">Especialização em IA</h4>
                  <p className="text-primary-light mb-2">Coursera / Udacity</p>
                  <p className="text-gray-400 text-sm">2023</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}