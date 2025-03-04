'use client'

import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // 監聽滾動事件
  useEffect(() => {
    const toggleVisibility = () => {
      // 當滾動超過 300px 時顯示按鈕
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // 點擊時滾動到頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 bottom-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="回到頂部"
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  )
} 