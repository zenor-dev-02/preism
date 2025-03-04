import Navigation from '../components/Navigation'

export default function VoicePage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold leading-6 text-gray-900">AI 配音系統</h1>
            <p className="mt-2 text-sm text-gray-700">
              使用 AI 技術生成自然的配音，支持多種語言和情緒風格。
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 左側：配音設置 */}
          <div className="space-y-6">
            <div className="space-y-4">
              <textarea
                rows={6}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="輸入要配音的文字..."
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                  <option>選擇語言</option>
                  <option>中文</option>
                  <option>英文</option>
                  <option>日文</option>
                </select>

                <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                  <option>選擇聲音</option>
                  <option>男聲 1</option>
                  <option>男聲 2</option>
                  <option>女聲 1</option>
                  <option>女聲 2</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">語速調整</label>
                <input
                  type="range"
                  className="w-full"
                  min="0.5"
                  max="2"
                  step="0.1"
                  defaultValue="1"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>慢</span>
                  <span>正常</span>
                  <span>快</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">情緒強度</label>
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="100"
                  step="10"
                  defaultValue="50"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>平淡</span>
                  <span>適中</span>
                  <span>強烈</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                生成配音
              </button>
            </div>
          </div>

          {/* 右側：預覽和歷史記錄 */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-medium text-gray-900">配音預覽</h3>
              <div className="mt-4">
                <div className="relative">
                  <div className="h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-medium text-gray-900">歷史記錄</h3>
              <div className="mt-4 space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">配音 {item}</p>
                      <p className="text-xs text-gray-500">2024-03-03 12:00</p>
                    </div>
                    <button
                      type="button"
                      className="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      播放
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 