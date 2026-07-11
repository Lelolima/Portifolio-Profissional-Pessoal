'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/profile'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-gradient">Projetos em Destaque</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos em Full-Stack, IA e Visão Computacional
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group glass rounded-xl overflow-hidden hover:bg-white/10 transition-all"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {project.name.includes('Agro') ? '🌾' :
                     project.name.includes('Automation') ? '🤖' : '📊'}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
                      aria-label="Ver código"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
                      aria-label="Ver ao vivo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary-light rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Lelolima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-primary/20 rounded-lg transition-all hover:scale-105"
            >
              <FaGithub className="w-5 h-5" />
              Ver mais no GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}