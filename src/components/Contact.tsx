'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { profileData } from '@/data/profile'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      return
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      return
    }

    setStatus('sending')

    // TODO: Implementar envio real (API, EmailJS, Formspree, etc.)
    // Simulação de envio
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-gradient">Vamos Conversar?</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias ou oportunidades
          </p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <FaEnvelope className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-primary-light">{profileData.email}</div>
                  </div>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <FaLinkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-primary-light">Conecte-se comigo</div>
                  </div>
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <FaGithub className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">GitHub</div>
                    <div className="text-primary-light">Veja meu código</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Localização</div>
                    <div className="text-primary-light">{profileData.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Sua mensagem..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 font-semibold rounded-lg glow transition-all hover:scale-105 ${
                    status === 'sending'
                      ? 'bg-gray-500 cursor-not-allowed'
                      : status === 'sent'
                      ? 'bg-green-500'
                      : status === 'error'
                      ? 'bg-red-500'
                      : 'bg-primary hover:bg-primary-dark'
                  } text-black`}
                >
                  {status === 'sending' ? 'Enviando...' :
                   status === 'sent' ? 'Enviado com sucesso!' :
                   status === 'error' ? 'Erro ao enviar' :
                   'Enviar Mensagem'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 pt-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Wellington de Lima Catarina.
            Desenvolvido com Next.js, Tailwind CSS e Framer Motion.
          </p>
        </div>
      </footer>
    </section>
  )
}