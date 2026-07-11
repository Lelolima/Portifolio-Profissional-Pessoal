'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { profileData } from '@/data/profile'
import AnimatedSVG from './AnimatedSVG'
import { LinkedInIcon, GitHubIcon, DownloadIcon } from './icons'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />

      {/* Animated SVG Background */}
      <AnimatedSVG />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white">Olá, eu sou{' '}</span>
              <span className="text-gradient block mt-2">
                {profileData.name}
              </span>
            </h1>
          </motion.div>

          {/* Title with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl mb-8"
          >
            <TypeAnimation
              sequence={[
                profileData.title,
                2000,
                profileData.subtitle,
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-emerald-400"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
          >
            {profileData.about}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-black font-semibold rounded-lg glow transition-all hover:scale-105"
            >
              Ver Projetos
            </a>
            <a
              href={profileData.cvUrl}
              download
              className="px-8 py-4 glass hover:bg-white/20 font-semibold rounded-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <DownloadIcon className="w-5 h-5" />
              Download CV
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass hover:bg-white/20 font-semibold rounded-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass hover:bg-white/20 font-semibold rounded-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <GitHubIcon className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}