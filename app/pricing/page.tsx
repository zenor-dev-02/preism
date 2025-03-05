'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { CheckIcon } from '@heroicons/react/24/solid'

interface PricingFeature {
  title: string
  essential: boolean | string | number
  pro: boolean | string | number
  unlimited: boolean | string | number
  enterprise: boolean | string | number
}

export default function PricingPage() {
  const { language } = useLanguage()
  const [isAnnual, setIsAnnual] = useState(false)

  const getPriceDisplay = (usdPrice: number) => {
    if (language === 'en') {
      return `$${usdPrice}`
    }
    return `NT$${usdPrice * 30}`
  }

  const getAnnualPrice = (monthlyUsdPrice: number) => {
    const annualUsdPrice = Math.round(monthlyUsdPrice * 12 * 0.8) // 20% discount
    if (language === 'en') {
      return `$${annualUsdPrice}`
    }
    return `NT$${Math.round(annualUsdPrice * 30)}`
  }

  const features: PricingFeature[] = [
    { title: 'AI 生成額度/月', essential: '500 次', pro: '2000 次', unlimited: '5000 次', enterprise: '無限制' },
    { title: '視頻生成額度/月', essential: '100 次', pro: '500 次', unlimited: '1000 次', enterprise: '無限制' },
    { title: '專案數量上限', essential: '3 個', pro: '10 個', unlimited: '無限制', enterprise: '無限制' },
    { title: '自訂角色數量', essential: '2 個', pro: '10 個', unlimited: '30 個', enterprise: '無限制' },
    { title: '場景數量/專案', essential: '10 個', pro: '50 個', unlimited: '200 個', enterprise: '無限制' },
    { title: 'ZIP 匯出', essential: true, pro: true, unlimited: true, enterprise: true },
    { title: 'AI 配音功能', essential: false, pro: true, unlimited: true, enterprise: true },
    { title: '視頻匯出', essential: false, pro: true, unlimited: true, enterprise: true },
    { title: '團隊成員數', essential: '1 人', pro: '5 人', unlimited: '15 人', enterprise: '無限制' },
    { title: '專屬客服支援', essential: false, pro: true, unlimited: true, enterprise: true },
    { title: 'API 存取', essential: false, pro: false, unlimited: true, enterprise: true },
    { title: '自訂模型訓練', essential: false, pro: false, unlimited: false, enterprise: true },
  ]

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navigation />
      
      {/* 頁面標題 */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-primary-color">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{language === 'en' ? 'Choose Your Plan' : '選擇適合您的方案'}</h1>
            <p className="text-xl text-white/90">
              {language === 'en' ? 'Start 7-day free trial with full features' : '立即開始 7 天免費試用，體驗完整功能'}
            </p>
          </div>
        </div>
      </section>

      {/* 切換按鈕 */}
      <section className="py-8">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              !isAnnual ? 'bg-[#1E1B4B] text-white shadow-lg' : 'text-gray-600 hover:text-[#1E1B4B]'
            }`}
          >
            {language === 'en' ? 'Monthly' : '月付方案'}
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              isAnnual ? 'bg-[#1E1B4B] text-white shadow-lg' : 'text-gray-600 hover:text-[#1E1B4B]'
            }`}
          >
            {language === 'en' ? 'Annual' : '年付方案'}
            <span className={`ml-2 text-sm ${isAnnual ? 'text-white/80' : 'text-[#1E1B4B]/80'}`}>
              {language === 'en' ? 'Save 20%' : '省 20%'}
            </span>
          </button>
        </div>
      </section>

      {/* 價格卡片 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Essential 方案 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Essential</h3>
                <p className="text-gray-500 mb-6">適合個人創作者入門使用</p>
                <div className="text-3xl font-bold mb-2">
                  {isAnnual ? getAnnualPrice(49) : getPriceDisplay(49)}
                  <span className="text-base font-normal text-gray-500">/{isAnnual ? (language === 'en' ? 'yr' : '年') : (language === 'en' ? 'mo' : '月')}</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-gray-500">{language === 'en' ? 'Billed annually' : '年付優惠'}</div>
                )}
                <button className="w-full mt-6 py-3 rounded-lg font-medium text-white bg-[#1E1B4B] hover:bg-[#1E1B4B]/90 transition-all">
                  {language === 'en' ? '7-Day Free Trial' : '免費試用 7 天'}
                </button>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {typeof feature.essential === 'boolean' ? (
                      feature.essential ? (
                        <CheckIcon className="h-5 w-5 text-primary-color" />
                      ) : (
                        <span className="h-5 w-5" />
                      )
                    ) : (
                      <span className="text-primary-color font-medium">{feature.essential}</span>
                    )}
                    <span className="text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro 方案 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-gray-500 mb-6">適合專業創作者與小型團隊</p>
                <div className="text-3xl font-bold mb-2">
                  {isAnnual ? getAnnualPrice(149) : getPriceDisplay(149)}
                  <span className="text-base font-normal text-gray-500">/{isAnnual ? (language === 'en' ? 'yr' : '年') : (language === 'en' ? 'mo' : '月')}</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-gray-500">{language === 'en' ? 'Billed annually' : '年付優惠'}</div>
                )}
                <button className="w-full mt-6 py-3 rounded-lg font-medium text-white bg-[#1E1B4B] hover:bg-[#1E1B4B]/90 transition-all">
                  {language === 'en' ? '7-Day Free Trial' : '免費試用 7 天'}
                </button>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <CheckIcon className="h-5 w-5 text-primary-color" />
                      ) : (
                        <span className="h-5 w-5" />
                      )
                    ) : (
                      <span className="text-primary-color font-medium">{feature.pro}</span>
                    )}
                    <span className="text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unlimited 方案 */}
            <div className="bg-gradient-to-b from-[#1E1B4B]/5 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-[#1E1B4B]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#1E1B4B] text-white px-4 py-1 rounded-full text-sm">
                  {language === 'en' ? 'Most Popular' : '最受歡迎'}
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Unlimited</h3>
                <p className="text-gray-500 mb-6">適合專業工作室與中型團隊</p>
                <div className="text-3xl font-bold mb-2">
                  {isAnnual ? getAnnualPrice(399) : getPriceDisplay(399)}
                  <span className="text-base font-normal text-gray-500">/{isAnnual ? (language === 'en' ? 'yr' : '年') : (language === 'en' ? 'mo' : '月')}</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-gray-500">{language === 'en' ? 'Billed annually' : '年付優惠'}</div>
                )}
                <button className="w-full mt-6 py-3 rounded-lg font-medium text-white bg-[#1E1B4B] hover:bg-[#1E1B4B]/90 transition-all">
                  {language === 'en' ? '7-Day Free Trial' : '免費試用 7 天'}
                </button>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {typeof feature.unlimited === 'boolean' ? (
                      feature.unlimited ? (
                        <CheckIcon className="h-5 w-5 text-primary-color" />
                      ) : (
                        <span className="h-5 w-5" />
                      )
                    ) : (
                      <span className="text-primary-color font-medium">{feature.unlimited}</span>
                    )}
                    <span className="text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise 方案 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-500 mb-6">適合大型企業與機構</p>
                <div className="text-3xl font-bold mb-2">
                  {language === 'en' ? 'Contact Us' : '聯絡我們'}
                </div>
                <p className="text-sm text-gray-500">
                  {language === 'en' ? 'Get custom pricing' : '取得客製化方案報價'}
                </p>
                <button className="w-full mt-6 py-3 rounded-lg font-medium text-[#1E1B4B] border-2 border-[#1E1B4B] hover:bg-[#1E1B4B]/5 transition-all">
                  {language === 'en' ? 'Contact Sales' : '聯絡銷售'}
                </button>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <CheckIcon className="h-5 w-5 text-primary-color" />
                      ) : (
                        <span className="h-5 w-5" />
                      )
                    ) : (
                      <span className="text-primary-color font-medium">{feature.enterprise}</span>
                    )}
                    <span className="text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 區域 */}
      <section className="py-20 bg-[#1E1B4B]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">常見問題</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">如何開始免費試用？</h3>
                <p className="text-gray-600">
                  註冊帳號後即可開始 7 天免費試用，期間內可使用完整功能，不需輸入信用卡資訊。試用期結束前可選擇升級為付費方案或繼續使用免費版本。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">可以隨時更改或取消方案嗎？</h3>
                <p className="text-gray-600">
                  是的，您可以隨時升級或降級您的方案。若選擇降級或取消，將在當前帳單週期結束後生效，已付費用不予退還。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">企業版方案包含哪些額外服務？</h3>
                <p className="text-gray-600">
                  企業版方案提供專屬客戶成功經理、優先技術支援、客製化培訓服務，以及根據需求量身打造的解決方案。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 