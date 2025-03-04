import Navigation from '../components/Navigation'

export default function AuditionPage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold leading-6 text-gray-900">AI 試鏡系統</h1>
            <p className="mt-2 text-sm text-gray-700">
              使用 AI 技術生成演員的試鏡影片，快速測試不同演員的表現效果。
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 左側：上傳區域 */}
          <div className="space-y-6">
            <div className="rounded-lg border border-dashed border-gray-300 p-12">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>上傳劇本或台詞</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">或將文件拖放到此處</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">支持 TXT, PDF, DOCX 格式</p>
              </div>
            </div>

            <div className="space-y-4">
              <textarea
                rows={4}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="或直接輸入台詞..."
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                  <option>選擇場景風格</option>
                  <option>戲劇寫實</option>
                  <option>廣告活潑</option>
                  <option>科幻未來</option>
                </select>

                <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                  <option>選擇情緒</option>
                  <option>開心</option>
                  <option>悲傷</option>
                  <option>憤怒</option>
                  <option>平靜</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                生成試鏡影片
              </button>
            </div>
          </div>

          {/* 右側：預覽區域 */}
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-100">
              <div className="flex items-center justify-center">
                <p className="text-gray-500">試鏡影片預覽區域</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">生成結果</h3>
              <div className="rounded-md bg-gray-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm text-gray-700">
                      AI 分析：表演自然度 85%，情緒表達準確度 90%，台詞清晰度 95%
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  重新生成
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  下載影片
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 