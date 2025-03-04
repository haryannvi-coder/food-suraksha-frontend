import React from 'react';
import { HotelCard } from '../components/HotelCard';
import { useNavigate } from 'react-router-dom';

export function Dashboard () {
  const navigate = useNavigate();
  

  const hotels = [
    { name: 'Grand Palace Hotel', location: 'New York, USA' },
    { name: 'Ocean View Resort', location: 'Goa, India' },
    { name: 'Mountain Escape', location: 'Manali, India' },
  ];

  const handleNavigation = (index) => {
    navigate(`/hotel/${index}`);
  };


  return <>
    <div>
      <h1>Hotels</h1>
      {hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          name={hotel.name}
          location={hotel.location}
          onClick={() => handleNavigation(index)}
        />
      ))}
    </div>


  </>
}


// import { Link } from "react-router-dom";

// export function Dashboard() {
//   return (
//     <div className="flex min-h-screen bg-black text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#181818] p-6 space-y-8">
//         <h1 className="text-2xl font-bold">Food Suraksha 24-7</h1>

//         <nav className="space-y-4">
//           <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg bg-purple-600">
//             <span>🏠</span>
//             <span>Dashboard</span>
//           </Link>
//           {[
//             "My Alerts",
//             "Oil Quality",
//             "Water Quality",
//             "Gas Concentration",
//             "Hygiene Monitoring",
//             "Pest Monitoring",
//           ].map((item) => (
//             <Link
//               key={item}
//               to={`/${item.toLowerCase().replaceAll(" ", "-")}`}
//               className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg"
//             >
//               <span>📊</span>
//               <span>{item}</span>
//             </Link>
//           ))}

//           <Link to="/logout" className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg">
//             <span>🚪</span>
//             <span>Logout</span>
//           </Link>
//         </nav>

//         <button className="mt-8 p-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white font-semibold">
//           Health is <span className="font-bold">WEALTH</span> 
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         {/* Header */}
//         <header className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold">Dashboard</h2>

//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="p-2 rounded-lg bg-gray-800 placeholder-gray-400"
//             />
//             <span>🔔</span>
//             <span>💬</span>
//             <img src="/avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
//           </div>
//         </header>

//         {/* Alert Section */}
//         <section className="mb-8">
//           <div className="bg-[#4d2222] p-4 rounded-xl flex justify-between items-center">
//             <h3 className="text-xl font-semibold">My Alerts</h3>
//             <span>10 Alerts</span>
//           </div>
//         </section>

//         {/* Cards Section */}
//         <div className="grid grid-cols-2 gap-8">
//           {/* Hotel 1 */}
//           <div className="bg-[#181818] p-6 rounded-xl">
//             <h4 className="text-xl mb-2">HOTEL - 1</h4>
//             <span className="text-green-400">Checked</span>
//           </div>

//           {/* Hotel 4 */}
//           <div className="bg-[#181818] p-6 rounded-xl">
//             <h4 className="text-xl mb-2">HOTEL - 4</h4>
//             <p className="text-red-400">Adulteration Detected</p>
//             <button className="text-yellow-400 mt-4">Take Action</button>
//           </div>

//           {/* Issues Card */}
//           <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-xl">
//             <p className="text-sm mb-2">28/02/25</p>
//             <h2 className="text-4xl font-bold">120</h2>
//             <p>Issues detected</p>
//           </div>

//           {/* Result Card */}
//           <div className="bg-[#6a38b2] p-6 rounded-xl">
//             <h4 className="text-xl mb-4">RESULT</h4>
//             {[
//               ["Hotel 1", "Checked"],
//               ["Hotel 2", "Pending"],
//               ["Hotel 3", "Checked"],
//               ["Hotel 4", "On Adulteration Detected"],
//               ["Hotel 5", "Checked"],
//               ["Hotel 6", "Pending"],
//               ["Hotel 7", "Severe Adulteration Detected"],
//             ].map(([hotel, status], index) => (
//               <p key={index} className={status.includes("Adulteration") ? "text-red-400" : "text-white"}>
//                 {hotel} - {status}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Check for New Hotel */}
//         <div className="mt-8">
//           <button className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-xl hover:scale-105 transition">
//             Check for new HOTEL
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }
