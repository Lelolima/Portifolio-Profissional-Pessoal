import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wellington de Lima Catarina | Full-Stack Developer & AI Specialist',
  description: 'Especialista em Visão Computacional, Automação e IA | Desenvolvedor Full-Stack',
  keywords: ['Full-Stack', 'Python', 'Computer Vision', 'IA', 'FastAPI', 'Docker'],
  authors: [{ name: 'Wellington de Lima Catarina' }],
  openGraph: {
    title: 'Wellington de Lima Catarina | Desenvolvedor Full-Stack',
    description: 'Especialista em Visão Computacional, Automação e IA',
    url: 'https://github.com/Lelolima',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}