'use client'

import { motion } from 'framer-motion'
import { blogPosts, profileData } from '@/data/profile'
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-gradient">Blog & Insights</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Artigos técnicos e pensamentos sobre desenvolvimento, IA e tecnologia
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaLinkedin className="text-blue-500" />
                    {post.platform}
                  </div>
                  <time className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read Link */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm font-medium"
                >
                  Ler artigo
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </motion.article>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-primary/20 rounded-lg transition-all hover:scale-105"
            >
              <FaLinkedin className="w-5 h-5" />
              Ver mais no LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}