'use client';

import { Fragment, useState } from 'react'
import { Dialog, Tab } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import * as authService from '../services/auth'
import { useLoading } from '../contexts/LoadingContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { language } = useLanguage()
  const { login: authLogin } = useAuth()
  const { isLoading, setIsLoading } = useLoading()
  const [error, setError] = useState('')

  // 登入表單狀態
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // 註冊表單狀態
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await authService.login(loginEmail, loginPassword)
      authLogin(response.token, response.user)
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : '登入失敗')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!agreeToTerms) {
      setError(language === 'en' ? 'Please agree to the terms' : '請同意服務條款')
      return
    }

    if (registerPassword !== confirmPassword) {
      setError(language === 'en' ? 'Passwords do not match' : '密碼不一致')
      return
    }

    setIsLoading(true)

    try {
      const response = await authService.register(registerEmail, registerPassword)
      authLogin(response.token, response.user)
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : '註冊失敗')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-xl font-bold gradient-text">
                    PREISM
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <Tab.Group>
                  <Tab.List className="flex space-x-4 border-b border-gray-200">
                    <Tab
                      className={({ selected }: { selected: boolean }) =>
                        `pb-4 text-sm font-medium leading-5 transition-colors ${
                          selected 
                            ? 'border-b-2 border-[#1E1B4B] text-[#1E1B4B]' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`
                      }
                    >
                      {language === 'en' ? 'Log In' : '登入'}
                    </Tab>
                    <Tab
                      className={({ selected }: { selected: boolean }) =>
                        `pb-4 text-sm font-medium leading-5 transition-colors ${
                          selected 
                            ? 'border-b-2 border-[#1E1B4B] text-[#1E1B4B]' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`
                      }
                    >
                      {language === 'en' ? 'Sign Up' : '註冊'}
                    </Tab>
                  </Tab.List>

                  <Tab.Panels className="mt-8">
                    {/* 登入面板 */}
                    <Tab.Panel>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'en' ? 'Email' : '電子郵件'}
                          </label>
                          <input
                            type="email"
                            id="login-email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20 focus:border-[#1E1B4B]"
                            placeholder={language === 'en' ? 'Enter your email' : '請輸入電子郵件'}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'en' ? 'Password' : '密碼'}
                          </label>
                          <input
                            type="password"
                            id="login-password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20 focus:border-[#1E1B4B]"
                            placeholder={language === 'en' ? 'Enter your password' : '請輸入密碼'}
                            required
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-[#1E1B4B] focus:ring-[#1E1B4B]"
                            />
                            <span className="ml-2 text-sm text-gray-600">
                              {language === 'en' ? 'Remember me' : '記住我'}
                            </span>
                          </label>
                          <button
                            type="button"
                            className="text-sm text-[#1E1B4B] hover:text-[#1E1B4B]/80"
                          >
                            {language === 'en' ? 'Forgot password?' : '忘記密碼？'}
                          </button>
                        </div>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3 rounded-lg font-medium text-white bg-[#1E1B4B] hover:bg-[#1E1B4B]/90 transition-all disabled:opacity-50"
                        >
                          {isLoading
                            ? (language === 'en' ? 'Logging in...' : '登入中...')
                            : (language === 'en' ? 'Log In' : '登入')}
                        </button>
                      </form>
                    </Tab.Panel>

                    {/* 註冊面板 */}
                    <Tab.Panel>
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                          <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'en' ? 'Email' : '電子郵件'}
                          </label>
                          <input
                            type="email"
                            id="register-email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20 focus:border-[#1E1B4B]"
                            placeholder={language === 'en' ? 'Enter your email' : '請輸入電子郵件'}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'en' ? 'Password' : '密碼'}
                          </label>
                          <input
                            type="password"
                            id="register-password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20 focus:border-[#1E1B4B]"
                            placeholder={language === 'en' ? 'Create a password' : '請設定密碼'}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'en' ? 'Confirm Password' : '確認密碼'}
                          </label>
                          <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20 focus:border-[#1E1B4B]"
                            placeholder={language === 'en' ? 'Confirm your password' : '請再次輸入密碼'}
                            required
                          />
                        </div>
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={agreeToTerms}
                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                            className="mt-1 rounded border-gray-300 text-[#1E1B4B] focus:ring-[#1E1B4B]"
                            required
                          />
                          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                            {language === 'en' 
                              ? 'I agree to the Terms of Service and Privacy Policy'
                              : '我同意服務條款和隱私政策'}
                          </label>
                        </div>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3 rounded-lg font-medium text-white bg-[#1E1B4B] hover:bg-[#1E1B4B]/90 transition-all disabled:opacity-50"
                        >
                          {isLoading
                            ? (language === 'en' ? 'Signing up...' : '註冊中...')
                            : (language === 'en' ? 'Sign Up' : '註冊')}
                        </button>
                      </form>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 