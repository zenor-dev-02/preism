'use client'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Image from 'next/image'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './locales/translations'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-color/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8">
                <span className="text-primary-color font-semibold mr-2">#1</span>
                <span className="text-text-secondary">{t.hero.badge}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                {t.hero.title.part1} <span className="gradient-text">{t.hero.title.part2}</span>
                <br />
                {t.hero.title.part3}<span className="text-primary-color">{t.hero.title.part4}</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl">
                {t.hero.description}
              </p>
              
              <div className="search-bar lg:mx-0 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
                <input
                  type="text"
                  placeholder={t.hero.searchPlaceholder}
                  className="search-input bg-transparent"
                />
                <button className="generate-button">
                  {t.hero.generateButton}
                </button>
              </div>

              <div className="tag-list justify-center lg:justify-start mt-8">
                {t.tags.map((tag, index) => (
                  <button key={index} className="tag animate-float-fast bg-white/80 backdrop-blur-sm" style={{
                    animationDelay: `${index * 0.1}s`
                  }}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="hero-image"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-preview.jpg"
                  alt="AI 虛擬試鏡預覽"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-8 -right-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float">
                <Image
                  src="/images/app-icon-1.png"
                  alt="AI 選角"
                  width={60}
                  height={60}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float-slow">
                <Image
                  src="/images/app-icon-2.png"
                  alt="AI 試鏡"
                  width={60}
                  height={60}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-primary-color font-semibold">{t.features.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {t.features.title}<span className="gradient-text">{t.features.titleHighlight}</span>{t.features.titleEnd}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t.features.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => (
              <div key={index} className="feature-card group bg-white/80 backdrop-blur-sm" style={{
                transitionDelay: `${index * 0.1}s`
              }}>
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Works Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-primary-color font-semibold">{t.samples.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {t.samples.title}<span className="gradient-text">{t.samples.titleHighlight}</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t.samples.description}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
            {t.samples.items.map((sample, index) => (
              <div key={index} 
                className={`group cursor-pointer ${index === 1 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'}`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="image-card w-full h-full relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
                  <Image
                    src={`/images/sample${index + 1}.jpg`}
                    alt={sample.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {sample.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                      <h3 className="text-2xl font-bold text-white mb-3">{sample.title}</h3>
                      <p className="text-gray-200 text-lg">{sample.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-primary-color font-semibold">{t.howItWorks.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.howItWorks.title}</span> {t.howItWorks.titleHighlight}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t.howItWorks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="feature-card group bg-white/80 backdrop-blur-sm" style={{
                  transitionDelay: `${index * 0.1}s`
                }}>
                  <div className="text-4xl font-bold gradient-text mb-6 transform group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-2 translate-x-1/2">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary-color to-secondary-color"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-color to-secondary-color opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-white font-semibold">{t.cta.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-float-slow">
              {t.cta.title}
            </h2>
            <p className="text-xl mb-12 text-white/90">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cta-button bg-white/90 text-primary-color/90 font-extrabold hover:bg-white/95 hover:text-primary-color">
                {t.cta.tryButton}
              </button>
              <button className="cta-button-outline border-white text-white hover:bg-white/10">
                {t.cta.learnButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
} 