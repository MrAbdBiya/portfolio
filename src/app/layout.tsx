import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Professionnel',
  description: 'Portfolio créé avec Next.js et Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#accueil" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                  <a href="#projets" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Projets</a>
                  <a href="#competences" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Compétences</a>
                  <a href="#contact" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-white dark:bg-black py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                2024 Mon Portfolio. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
