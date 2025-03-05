import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'
import { LoadingProvider } from './contexts/LoadingContext'
import LoadingHandler from './components/LoadingHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Preism',
  description: 'Preism - Your Professional Casting Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <LoadingProvider>
            <LanguageProvider>
              <LoadingHandler />
              {children}
            </LanguageProvider>
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  )
} 