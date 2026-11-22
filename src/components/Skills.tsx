'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/profile'
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFastapi, SiPostgresql, SiMongodb, SiOpencv, SiTensorflow, SiPytorch } from 'react-icons/si'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Python: FaPython,
  TypeScript: SiTypescript,
  JavaScript: FaNodeJs,
  React: FaReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': FaNodeJs,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  OpenCV: SiOpencv,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  Docker: FaDocker,
  Git: FaGitAlt,
}

const SkillIcon = ({ name }: { name: string }) => {
  const Icon = iconMap[name] || FaNodeJs
  return <Icon className="w-8 h-8" />
}

// Posições determinísticas (mesmo resultado no servidor e no cliente)
const SKILL_CLOUD = [...Array(15)].map((_, i) => ({
  id: i,
  left: `${(i * 7) % 100}%`,
  top: `${(i * 13) % 100}%`,
  text: ['Code', 'AI', 'ML', 'Web', 'API', 'Cloud', 'Data', 'viz'][i % 8],
}))

export default function Skills() {
  const skillCategories = [
    { name: 'Languages', items: skills.languages },
    { name: 'Frontend', items: skills.frontend },
    { name: 'Backend', items: skills.backend },
    { name: 'IA / ML', items: skills.ai },
    { name: 'Tools', items: skills.tools },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Skills & Tecnologias</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-all cursor-default"
                    >
                      <SkillIcon name={skill} />
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Skill Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 relative h-32"
          >
            {SKILL_CLOUD.map((item) => (
              <motion.div
                key={item.id}
                className="absolute text-gray-600 text-xs"
                style={{
                  left: item.left,
                  top: item.top,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: (item.id % 3) + 2,
                  repeat: Infinity,
                  delay: (item.id % 5) * 0.4,
                }}
              >
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}