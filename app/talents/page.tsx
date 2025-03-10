'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

interface TalentProfile {
  id: string
  name: string
  age: string
  gender: string
  languages: string[]
  voiceTypes: string[]
  photos: string[]
  aiGenerated: boolean
  sampleAudio?: string
}

export default function TalentsPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGender, setSelectedGender] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedVoiceTypes, setSelectedVoiceTypes] = useState<string[]>([])
  const [talents] = useState<TalentProfile[]>([
    {
      id: '1',
      name: '王小明',
      age: '25',
      gender: '女性',
      languages: ['中文', '英文'],
      voiceTypes: ['溫暖', '專業'],
      photos: ['/images/sample-talent-1.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '2',
      name: '李小華',
      age: '28',
      gender: '男性',
      languages: ['中文', '英文', '日文'],
      voiceTypes: ['活潑', '甜美'],
      photos: ['/images/sample-talent-2.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '3',
      name: '張大山',
      age: '35',
      gender: '男性',
      languages: ['中文', '英文'],
      voiceTypes: ['渾厚', '威嚴'],
      photos: ['/images/sample-talent-3.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '4',
      name: '陳美麗',
      age: '30',
      gender: '女性',
      languages: ['中文', '韓文'],
      voiceTypes: ['成熟', '優雅'],
      photos: ['/images/sample-talent-4.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '5',
      name: '林志明',
      age: '27',
      gender: '男性',
      languages: ['中文', '英文'],
      voiceTypes: ['青春', '活力'],
      photos: ['/images/sample-talent-5.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '6',
      name: '黃雅琪',
      age: '32',
      gender: '女性',
      languages: ['中文', '英文', '法文'],
      voiceTypes: ['知性', '專業'],
      photos: ['/images/sample-talent-6.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '7',
      name: '吳俊傑',
      age: '40',
      gender: '男性',
      languages: ['中文', '英文'],
      voiceTypes: ['沉穩', '權威'],
      photos: ['/images/sample-talent-7.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '8',
      name: '楊小燕',
      age: '24',
      gender: '男性',
      languages: ['中文', '英文'],
      voiceTypes: ['清新', '活潑'],
      photos: ['/images/sample-talent-8.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    },
    {
      id: '9',
      name: '趙明宇',
      age: '29',
      gender: '女性',
      languages: ['中文', '英文', '德文'],
      voiceTypes: ['陽光', '親切'],
      photos: ['/images/sample-talent-9.png'],
      aiGenerated: true,
      sampleAudio: '/audios/sample1.mp3'
    }
  ])

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navigation />
      
      {/* 頁面標題 */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-primary-color">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? 'AI Actor Database' : 'AI 演員資料庫'}
            </h1>
            <p className="text-xl text-white/90">
              {language === 'en' ? 'Create your own unique AI actors' : '創建專屬於您的 AI 演員'}
            </p>
          </div>
        </div>
      </section>

      {/* 搜尋和篩選區 */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder={language === 'en' ? 'Search actors...' : '搜尋演員...'}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20 focus:border-[#1E1B4B]"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20 focus:border-[#1E1B4B]">
                <option>{language === 'en' ? 'All Categories' : '所有類別'}</option>
                <option>{language === 'en' ? 'Male' : '男性'}</option>
                <option>{language === 'en' ? 'Female' : '女性'}</option>
              </select>
              <button className="px-6 py-2 rounded-lg bg-[#1E1B4B] text-white hover:bg-[#1E1B4B]/90 transition-all">
                {language === 'en' ? 'Create New' : '新增演員'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 演員列表 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* 演員卡片 */}
            {talents.map((talent) => (
              <div key={talent.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                  <Image 
                    src={talent.photos[0]} 
                    alt={talent.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{talent.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {talent.age}歲 · {talent.gender}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.voiceTypes.map((type) => (
                      <span key={type} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                        {type}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 rounded-lg bg-[#1E1B4B] text-white hover:bg-[#1E1B4B]/90 transition-all text-sm">
                      {language === 'en' ? 'Use' : '使用'}
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg border border-[#1E1B4B] text-[#1E1B4B] hover:bg-[#1E1B4B]/5 transition-all text-sm">
                      {language === 'en' ? 'Details' : '詳情'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 