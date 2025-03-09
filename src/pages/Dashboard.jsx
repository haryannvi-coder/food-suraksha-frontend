import React from 'react';
import { HotelCard } from '../components/HotelCard';
import { useNavigate } from 'react-router-dom';

export function Dashboard () {
  const navigate = useNavigate();
  

  const hotels = [
    { name: 'Serene Bay Hotel', location: 'Trivandrum, India' },
    { name: 'Crystal Lake Resort', location: 'Trivandrum, India' },
    { name: 'Sunset View Inn', location: 'Trivandrum, India' },
    { name: 'Royal Palm Suites', location: 'Trivandrum, India' },
    { name: 'Sea Breeze Hotel', location: 'Trivandrum, India' },
    { name: 'Golden Orchid Inn', location: 'Trivandrum, India' },
    { name: 'Trivandrum Grand Residency', location: 'Trivandrum, India' },
    { name: 'Green Valley Retreat', location: 'Trivandrum, India' },
    { name: 'Blue Horizon Resort', location: 'Trivandrum, India' },
    { name: 'Palm Grove Stay', location: 'Trivandrum, India' },

  ];

  const handleNavigation = (index) => {
    navigate(`/hotel/${index}`);
  };


  return <>
    <h1>Hotels</h1>
    <div className='flex flex-wrap gap-20' >
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


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const areas = ['Trivandrum', 'Kochi', 'Chennai'];

// const hotelData = {
//   Trivandrum: [
//     { name: 'Serene Bay Hotel', location: 'Trivandrum, India' },
//     { name: 'Crystal Lake Resort', location: 'Trivandrum, India' },
//   ],
//   Kochi: [
//     { name: 'Ocean Pearl Inn', location: 'Kochi, India' },
//     { name: 'Sunset Shores', location: 'Kochi, India' },
//   ],
//   Chennai: [
//     { name: 'Marina View Suites', location: 'Chennai, India' },
//     { name: 'Golden Sand Hotel', location: 'Chennai, India' },
//   ],
// };

// const alertData = {
//   Trivandrum: [
//     { hotel: 'Serene Bay Hotel', alert: 'Water Quality Alert', date: '2025-03-10', time: '10:00 AM' },
//     { hotel: 'Crystal Lake Resort', alert: 'Oil Adulteration Detected', date: '2025-03-11', time: '02:00 PM' },
//   ],
//   Kochi: [
//     { hotel: 'Ocean Pearl Inn', alert: 'Gas Leakage Detected', date: '2025-03-12', time: '03:30 PM' },
//   ],
//   Chennai: [
//     { hotel: 'Golden Sand Hotel', alert: 'Pest Detection Alert', date: '2025-03-13', time: '09:15 AM' },
//   ],
// };

// export function Dashboard() {
//   const navigate = useNavigate();
//   const [selectedArea, setSelectedArea] = useState('Trivandrum');

//   const handleNavigation = (index) => {
//     navigate(`/hotel/${index}`);
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
//       <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

//       {/* Area Selector */}
//       <div className="flex gap-4 mb-8">
//         {areas.map((area) => (
//           <button
//             key={area}
//             className={`px-4 py-2 rounded-lg transition ${
//               selectedArea === area ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
//             }`}
//             onClick={() => setSelectedArea(area)}
//           >
//             {area}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Hotel List Card */}
//         <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
//           <h2 className="text-2xl font-semibold mb-6">Hotels in {selectedArea}</h2>
//           <div className="space-y-4">
//             {hotelData[selectedArea].map((hotel, index) => (
//               <div
//                 key={index}
//                 className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:shadow-md"
//                 onClick={() => handleNavigation(index)}
//               >
//                 <p className="text-lg font-medium">{hotel.name}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{hotel.location}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Alerts Card */}
//         <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
//           <h2 className="text-2xl font-semibold mb-6">Alerts in {selectedArea}</h2>
//           <div className="space-y-4">
//             {alertData[selectedArea].map((alert, index) => (
//               <div key={index} className="p-4 bg-red-50 dark:bg-gray-700 rounded-lg">
//                 <p className="text-lg font-medium">{alert.alert}</p>
//                 <p className="text-sm">Hotel: {alert.hotel}</p>
//                 <p className="text-sm">Date: {alert.date}</p>
//                 <p className="text-sm">Time: {alert.time}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





