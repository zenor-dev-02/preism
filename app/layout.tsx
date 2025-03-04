import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Preism - AI Virtual Audition Platform',
  description: 'AI-powered virtual audition platform for the next generation of content creation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 