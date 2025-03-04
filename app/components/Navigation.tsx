'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../locales/translations'
import AuthModal from './AuthModal'

type NavKeys = 'home' | 'portfolio' | 'news' | 'pricing' | 'contact' | 'talents'

type NavigationItem = {
  name: NavKeys
  href: string
}

const navigation: NavigationItem[] = [
  { name: 'home', href: '/' },
  { name: 'talents', href: '/talents' },
  { name: 'news', href: '/news' },
  { name: 'pricing', href: '/pricing' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="text-2xl font-bold gradient-text">PREISM</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">開啟選單</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-primary transition-colors"
              >
                {t.nav[item.name]}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setAuthModalOpen(true)}
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              {t.nav.login}
            </button>
            <button
              onClick={() => setAuthModalOpen(true)}
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t.nav.join}
            </button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold gradient-text">PREISM</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">關閉選單</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {t.nav[item.name]}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <button
                    onClick={toggleLanguage}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
                  >
                    {language === 'zh' ? 'EN' : '中文'}
                  </button>
                  <button
                    onClick={() => setAuthModalOpen(true)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {t.nav.login}
                  </button>
                  <button
                    onClick={() => setAuthModalOpen(true)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-primary hover:bg-primary/90 transition-colors"
                  >
                    {t.nav.join}
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </>
  )
} 