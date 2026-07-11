'use client'

import { motion } from 'framer-motion'

export default function AnimatedSVG() {
  return (
    <svg
      className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circuit Lines */}
      <motion.path
        d="M100 200 L200 200 L200 300 L300 300 L300 250 L400 250 L400 350"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.path
        d="M500 150 L600 150 L600 250 L700 250"
        fill="none"
        stroke="#34d399"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 800}
          cy={Math.random() * 800}
          r={Math.random() * 3 + 1}
          fill="#10b981"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Orbiting Rings */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '400px', originY: '400px' }}
      >
        <ellipse
          cx="400"
          cy="400"
          rx="300"
          ry="100"
          fill="none"
          stroke="#10b981"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <ellipse
          cx="400"
          cy="400"
          rx="200"
          ry="150"
          fill="none"
          stroke="#34d399"
          strokeWidth="0.5"
          opacity="0.3"
          transform="rotate(60 400 400)"
        />
      </motion.g>

      {/* Hexagon Pattern */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${100 + i * 150} 100 L${130 + i * 150} 80 L${160 + i * 150} 100 L${160 + i * 150} 140 L${130 + i * 150} 160 L${100 + i * 150} 140 Z`}
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
          />
        ))}
      </motion.g>

      {/* Floating Code Icons */}
      <motion.g
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <text x="150" y="500" fill="#10b981" fontSize="24" fontFamily="monospace">
          {'<>'}
        </text>
        <text x="650" y="150" fill="#34d399" fontSize="24" fontFamily="monospace">
          {'</>'}
        </text>
      </motion.g>

      {/* Scanning Line */}
      <motion.line
        x1="0"
        x2="800"
        y1="400"
        y2="400"
        stroke="#10b981"
        strokeWidth="1"
        opacity="0.3"
        initial={{ y1: 0, y2: 0 }}
        animate={{ y1: 800, y2: 800 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}