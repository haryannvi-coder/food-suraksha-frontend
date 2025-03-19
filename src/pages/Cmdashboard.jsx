import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {KeralaMap1} from './KeralaMap1'

export function Cmdashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const navigate = useNavigate()

  const menuItems = [
    {label: 'Dashboard', path: '/ministerdashboard'},
    { label: 'Logout', path: '/logout' }
  ]

  return (
    <div className="flex h-screen bg-white overflow-hidden">
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

        <KeralaMap1 />
      </div>
    </div>
  )
}