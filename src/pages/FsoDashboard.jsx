import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FsoDashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const navigate = useNavigate()

  const menuItems = [
    { label: 'Jurisdiction Map', path: '/keralamap' },
    { label: 'Alerts', path: '/alerts' },
    { label: 'Track License Applications', path: '/licenses' },
    { label: 'Track Claims', path: '/claims' },
    { label: 'Logout', path: '/logout' }
  ]

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-64 w-0'
        }`}
      >
        <div className="py-8 relative z-50">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer text-gray-800 font-medium transition-all duration-300 ${
                hoveredIndex === index ? 'text-lg pl-6' : hoveredIndex !== null ? 'text-sm opacity-70' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg"
      >
        <div className="w-6 h-[2px] bg-gray-800 mb-1" />
        <div className="w-6 h-[2px] bg-gray-800 mb-1" />
        <div className="w-6 h-[2px] bg-gray-800" />
      </button>

      {/* Main Content */}
      <div className={`flex-1 p-8 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
        <h1 className="text-4xl font-bold text-green-700 mb-8">Food Safety Officer Dashboard</h1>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Reports', 'Alerts', 'Jurisdiction Map'].map((title, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-4">{title}</h2>
              <p className="text-gray-600">
                {idx === 0
                  ? '98% of hotels meet safety standards.'
                  : idx === 1
                  ? '3 alerts raised in the last week.'
                  : 'Trivandrum Area Map'}
              </p>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="mt-12 p-6 bg-green-50 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Latest Insights</h2>
          <p className="text-gray-700 leading-relaxed">
            Real-time monitoring helps identify unsafe practices and respond immediately. Oil quality analysis ensures
            compliance with FSSAI standards. Proactive measures ensure safer kitchens for all.
          </p>
        </div>
      </div>
    </div>
  )
}
