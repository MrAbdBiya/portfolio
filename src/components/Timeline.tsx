import { motion } from 'framer-motion'

interface TimelineItem {
  date: string
  title: string
  description: string
  icon?: React.ReactNode
  category: 'education' | 'experience' | 'certification'
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`flex items-center mb-8 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Content */}
          <div className="w-5/12">
            <div
              className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg
                ${index % 2 === 0 ? 'mr-8' : 'ml-8'}
                ${
                  item.category === 'education'
                    ? 'border-l-4 border-blue-500'
                    : item.category === 'experience'
                    ? 'border-l-4 border-green-500'
                    : 'border-l-4 border-purple-500'
                }
              `}
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.date}
              </span>
              <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>

          {/* Center dot */}
          <div className="w-2/12 flex justify-center">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center
                ${
                  item.category === 'education'
                    ? 'bg-blue-500'
                    : item.category === 'experience'
                    ? 'bg-green-500'
                    : 'bg-purple-500'
                }
              `}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.icon || '•'}
            </motion.div>
          </div>

          {/* Spacer for alignment */}
          <div className="w-5/12" />
        </motion.div>
      ))}
    </div>
  )
}
