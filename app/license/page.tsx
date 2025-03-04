import Navigation from '../components/Navigation'

const licenses = [
  {
    id: 1,
    type: '基礎方案',
    price: '500',
    period: '月',
    features: [
      '每月 50 次 AI 影像生成',
      '基礎語音合成功能',
      '標準試鏡場景',
      '基礎數據分析',
    ],
  },
  {
    id: 2,
    type: '專業方案',
    price: '2,000',
    period: '月',
    features: [
      '無限次 AI 影像生成',
      '進階語音合成功能',
      '全部試鏡場景',
      '詳細數據分析報告',
      '優先技術支持',
    ],
    popular: true,
  },
  {
    id: 3,
    type: '企業方案',
    price: '聯繫我們',
    period: '',
    features: [
      '客製化 AI 模型訓練',
      '專屬語音庫建置',
      '場景深度定制',
      '專人技術支持',
      'API 介接服務',
    ],
  },
]

export default function LicensePage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold leading-6 text-gray-900">授權方案</h1>
            <p className="mt-2 text-sm text-gray-700">
              選擇最適合您需求的授權方案，開始使用 AI 影像生成服務。
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {licenses.map((license) => (
            <div
              key={license.id}
              className={`divide-y divide-gray-200 rounded-lg border ${
                license.popular
                  ? 'border-indigo-600 shadow-sm'
                  : 'border-gray-200'
              } bg-white`}
            >
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{license.type}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {license.price}
                  </span>
                  {license.period && (
                    <span className="text-base font-medium text-gray-500">/{license.period}</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  適用於{license.type === '基礎方案' ? '小型創作團隊' : license.type === '專業方案' ? '專業製作公司' : '大型企業'}
                </p>
                <button
                  type="button"
                  className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm ${
                    license.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                  }`}
                >
                  {license.price === '聯繫我們' ? '聯繫我們' : '開始使用'}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">包含功能</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {license.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 使用記錄 */}
        <div className="mt-16">
          <h2 className="text-lg font-medium text-gray-900">使用記錄</h2>
          <div className="mt-4 ring-1 ring-gray-200 sm:mx-0 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    日期
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    類型
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    使用次數
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    剩餘次數
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    date: '2024-03-03',
                    type: 'AI 試鏡',
                    used: 5,
                    remaining: 45,
                  },
                  {
                    date: '2024-03-02',
                    type: 'AI 配音',
                    used: 3,
                    remaining: 47,
                  },
                ].map((record) => (
                  <tr key={record.date}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                      {record.date}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {record.type}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {record.used}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {record.remaining}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 