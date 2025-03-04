import Navigation from '../components/Navigation'

const actors = [
  {
    id: 1,
    name: '王小明',
    age: 25,
    gender: '男',
    height: 180,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    specialties: ['戲劇', '廣告', '配音'],
  },
  {
    id: 2,
    name: '李小華',
    age: 28,
    gender: '女',
    height: 168,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    specialties: ['電影', '舞台劇', '配音'],
  },
  // 更多演員數據...
]

export default function CastingPage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold leading-6 text-gray-900">AI 選角系統</h1>
            <p className="mt-2 text-sm text-gray-700">
              瀏覽並搜索 AI 掃描的演員數據，查看其臉型、表情、聲音特徵。
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              新增演員
            </button>
          </div>
        </div>

        {/* 搜索過濾器 */}
        <div className="mt-8 flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="搜索演員姓名、特長..."
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
            <option>全部性別</option>
            <option>男</option>
            <option>女</option>
          </select>
          <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
            <option>全部類型</option>
            <option>戲劇</option>
            <option>電影</option>
            <option>廣告</option>
            <option>配音</option>
          </select>
        </div>

        {/* 演員列表 */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actors.map((actor) => (
            <div
              key={actor.id}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <img className="h-16 w-16 rounded-full object-cover" src={actor.imageUrl} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{actor.name}</p>
                  <p className="truncate text-sm text-gray-500">
                    {actor.age}歲 · {actor.gender} · {actor.height}cm
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {actor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 