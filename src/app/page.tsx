'use client'

import { motion } from 'framer-motion'
import ParticlesNetwork from '@/components/ParticlesNetwork'
import ProjectCard from '@/components/ProjectCard'
import Timeline from '@/components/Timeline'
import { AcademicCapIcon, BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const timelineItems = [
    {
      date: '2023 - Présent',
      title: 'Master CCA',
      description: 'Master en Comptabilité, Contrôle et Audit',
      category: 'education' as const,
      icon: <AcademicCapIcon className="w-4 h-4 text-white" />,
    },
    {
      date: 'Avril 2022 - Septembre 2022',
      title: 'Stage - COGERNA SARL',
      description: 'Service comptable et financier',
      category: 'experience' as const,
      icon: <BriefcaseIcon className="w-4 h-4 text-white" />,
    },
    {
      date: '2022',
      title: 'Certification Python',
      description: 'Maîtrise de Python pour l\'analyse de données',
      category: 'certification' as const,
      icon: <CodeBracketIcon className="w-4 h-4 text-white" />,
    },
  ]

  const projects = [
    {
      title: 'Analyse Financière Dashboard',
      description: 'Dashboard interactif pour l\'analyse financière avec Power BI',
      tags: ['Power BI', 'Finance', 'Data Analysis'],
      image: '/projects/finance-dashboard.jpg',
    },
    {
      title: 'Automatisation Comptable',
      description: 'Script Python pour l\'automatisation des tâches comptables',
      tags: ['Python', 'Automation', 'Accounting'],
      image: '/projects/automation.jpg',
    },
    {
      title: 'Portfolio Personnel',
      description: 'Site web personnel créé avec Next.js et Tailwind CSS',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      image: '/projects/portfolio.jpg',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ParticlesNetwork />
      
      {/* Hero Section */}
      <section id="accueil" className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 absolute inset-0 blur-lg opacity-50" />
          <img
            src="/profile-photo.png"
            alt="ABDESSAMAD BIYA"
            className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg relative z-10"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          ABDESSAMAD BIYA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
        >
          Expert en Comptabilité & Finance | Passionné par la Tech
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full transition-all transform hover:scale-105 shadow-lg">
            Voir mes projets
          </button>
          <button className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all">
            Me contacter
          </button>
        </motion.div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Compétences
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Outils Informatiques",
                skills: ["Pack Office", "Sage", "Power BI", "Git", "VS Code"],
              },
              {
                title: "Langages & Technologies",
                skills: ["Python", "SQL", "R", "HTML/CSS", "JavaScript"],
              },
              {
                title: "Finance & Comptabilité",
                skills: ["Analyse financière", "Contrôle de gestion", "Comptabilité", "Audit", "Fiscalité"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section id="parcours" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Mon Parcours
          </motion.h2>
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Mes Projets
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:abd.biya2001@gmail.com" className="hover:text-blue-500">abd.biya2001@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Béni mellal, Maroc</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
