import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function NewDash() {
  const [activeTab, setActiveTab] = useState('license');

  const tabs = [
    'License / Registration',
    'Consumer Grievances',
    'Payments',
    'Enforcement Activities',
  ];

  const cards = [
    { title: 'Issued Licenses', color: 'bg-green-500', link: '#' },
    { title: 'Issued Registration', color: 'bg-orange-400', link: '#' },
    { title: 'License Application Status', color: 'bg-red-500', link: '#' },
    { title: 'Registration Application Status', color: 'bg-blue-400', link: '#' },
    { title: 'Hotels', color: 'bg-blue-400', link: '/dashboard' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold">FoSCoS Dashboard</h1>
        <div>
          <Button variant="outline">Change Password</Button>
          <Button variant="outline" className="ml-2">Logout</Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-4 space-y-2 shadow-lg">
          {['Hotels', 'License Payment Transaction', 'Reports', 'Hygiene Management', 'Settings', 'Logout'].map((item) => (
            <button
              key={item}
              className="block w-full text-left p-2 hover:bg-gray-100 rounded-lg"
            >
              {item}
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Tabs Navigation */}
          <nav className="flex space-x-4 border-b pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab ? 'border-b-2 border-green-500 font-semibold' : ''
                } p-2`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Dashboard Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <Link to={card.link} key={card.title} className="block">
                <div className={`p-6 rounded-lg shadow-xl ${card.color} text-white`}>{card.title}</div>
              </Link>
            ))}
          </div>

          {/* Summary Link */}
          <div className="mt-8">
            <Link to="#" className="text-blue-500 underline">Click to view State-wise Summary</Link>
          </div>
        </main>
      </div>
    </div>
  );
}



