// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../components/Button';

// export function NewDash() {
//   const [activeTab, setActiveTab] = useState('license');

//   const tabs = [
//     'License / Registration',
//     'Consumer Grievances',
//     'Payments',
//     'Enforcement Activities',
//   ];

//   const cards = [
//     { title: 'Issued Licenses', color: 'bg-green-500', link: '#' },
//     { title: 'Issued Registration', color: 'bg-orange-400', link: '#' },
//     { title: 'License Application Status', color: 'bg-red-500', link: '#' },
//     { title: 'Registration Application Status', color: 'bg-blue-400', link: '#' },
//     { title: 'Hotels', color: 'bg-blue-400', link: '/dashboard' },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       {/* Header */}
//       <header className="flex justify-between items-center p-4 bg-white shadow-md">
//         <h1 className="text-xl font-bold">FoSCoS Dashboard</h1>
//         <div>
//           <Button variant="outline">Change Password</Button>
//           <Button variant="outline" className="ml-2">Logout</Button>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white p-4 space-y-2 shadow-lg">
//           {['Hotels', 'License Payment Transaction', 'Reports', 'Hygiene Management', 'Settings', 'Logout'].map((item) => (
//             <button
//               key={item}
//               className="block w-full text-left p-2 hover:bg-gray-100 rounded-lg"
//             >
//               {item}
//             </button>
//           ))}
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           {/* Tabs Navigation */}
//           <nav className="flex space-x-4 border-b pb-2">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`${
//                   activeTab === tab ? 'border-b-2 border-green-500 font-semibold' : ''
//                 } p-2`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>

//           {/* Dashboard Cards */}
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {cards.map((card) => (
//               <Link to={card.link} key={card.title} className="block">
//                 <div className={`p-6 rounded-lg shadow-xl ${card.color} text-white`}>{card.title}</div>
//               </Link>
//             ))}
//           </div>

//           {/* Summary Link */}
//           <div className="mt-8">
//             <Link to="#" className="text-blue-500 underline">Click to view State-wise Summary</Link>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useNavigate } from 'react-router-dom';

const getRandomHotels = () =>
  Array.from({ length: 150 }, (_, i) => ({
    name: `Hotel ${i + 1}`,
    compliance: Math.random() > 0.7 ? 'Non-Compliant' : 'Compliant',
    licensePending: Math.random() > 0.8,
    penalties: Math.floor(Math.random() * 5),
    alerts: Math.floor(Math.random() * 3),
  }));

export function NewDash() {
  const [hotels, setHotels] = useState(getRandomHotels());
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setHotels(getRandomHotels()), 10000);
    return () => clearInterval(interval);
  }, []);

  const compliantHotels = hotels.filter(h => h.compliance === 'Compliant').length;
  const nonCompliantHotels = hotels.length - compliantHotels;
  const pendingLicenses = hotels.filter(h => h.licensePending).length;
  const totalPenalties = hotels.reduce((acc, h) => acc + h.penalties, 0);
  const totalAlerts = hotels.reduce((acc, h) => acc + h.alerts, 0);

  const COLORS = ['#4CAF50', '#F44336', '#FFC107'];

  return (
    
    <div className="min-h-screen p-8 bg-white text-gray-900">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Local Food Safety Dashboard</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Settings</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Logout</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Compliance Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={[{ name: 'Compliant', value: compliantHotels }, { name: 'Non-Compliant', value: nonCompliantHotels }]} dataKey="value" nameKey="name" outerRadius={120}>
                <Cell fill={COLORS[0]} />
                <Cell fill={COLORS[1]} />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-gray-100 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Pending Licenses & Penalties</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[{ name: 'Pending Licenses', value: pendingLicenses }, { name: 'Total Penalties', value: totalPenalties }]}> 
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-gray-100 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Real-Time Alerts</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[{ name: 'Alerts', value: totalAlerts }]}> 
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#F44336" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Hotel Status Overview</h2>
        <div className="overflow-auto max-h-[400px]">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Hotel Name</th>
                <th className="py-2 px-4">Compliance</th>
                <th className="py-2 px-4">License Pending</th>
                <th className="py-2 px-4">Penalties</th>
                <th className="py-2 px-4">Alerts</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{hotel.name}</td>
                  <td className="py-2 px-4">{hotel.compliance}</td>
                  <td className="py-2 px-4">{hotel.licensePending ? 'Yes' : 'No'}</td>
                  <td className="py-2 px-4">{hotel.penalties}</td>
                  <td className="py-2 px-4">{hotel.alerts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <br/>
      <button onClick={() => navigate("/dashboard")} className="text-black" >  Fso Hotels </button>
    </div>
  );
}




