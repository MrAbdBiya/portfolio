import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  delay: number
}

export default function SkillCard({ title, skills, icon, delay }: SkillCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-500 w-8 h-8">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
