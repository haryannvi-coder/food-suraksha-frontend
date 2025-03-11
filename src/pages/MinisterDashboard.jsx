// import { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Chart from 'chart.js/auto';

// const hotelData = [
//   { id: 1, lat: 10.8505, lng: 76.2711, status: 'safe', name: 'Hotel GreenView', rating: 4, district: 'Palakkad' },
//   { id: 2, lat: 10.7916, lng: 76.6925, status: 'violation', name: 'Hotel RedAlert', rating: 2, district: 'Thrissur' },
//   { id: 3, lat: 9.9312, lng: 76.2673, status: 'safe', name: 'Hotel BlueSky', rating: 5, district: 'Ernakulam' },
//   { id: 4, lat: 11.2588, lng: 75.7804, status: 'violation', name: 'Hotel Critical', rating: 1, district: 'Kozhikode' },
//   { id: 5, lat: 10.8505, lng: 76.2711, status: 'safe', name: 'Hotel Sunshine', rating: 3, district: 'Palakkad' },
// ];

// const getMarkerIcon = (status) => {
//   return L.divIcon({
//     className: 'custom-icon',
//     html: `<div style="width: 12px; height: 12px; background-color: ${status === 'safe' ? 'green' : 'red'}; border-radius: 50%;"></div>`
//   });
// };

// export function MinisterDashboard() {
//   const complianceChartRef = useRef(null);
//   const performanceChartRef = useRef(null);
//   const districtChartRef = useRef(null);

//   const updateCharts = () => {
//     if (complianceChartRef.current) complianceChartRef.current.destroy();
//     if (performanceChartRef.current) performanceChartRef.current.destroy();
//     if (districtChartRef.current) districtChartRef.current.destroy();

//     const ctx1 = document.getElementById('complianceChart');
//     complianceChartRef.current = new Chart(ctx1, {
//       type: 'bar',
//       data: {
//         labels: ['Safe Hotels', 'Violations'],
//         datasets: [{
//           label: 'Hotel Compliance Status',
//           data: [
//             hotelData.filter(hotel => hotel.status === 'safe').length,
//             hotelData.filter(hotel => hotel.status === 'violation').length
//           ],
//           backgroundColor: ['#4CAF50', '#F44336'],
//           borderRadius: 8,
//         }]
//       },
//       options: { responsive: true, plugins: { legend: { display: true } } }
//     });

//     const safeHotels = hotelData.filter(hotel => hotel.status === 'safe');
//     const ctx2 = document.getElementById('performanceChart');
//     performanceChartRef.current = new Chart(ctx2, {
//       type: 'bar',
//       data: {
//         labels: safeHotels.map(hotel => hotel.name),
//         datasets: [{
//           label: 'Safe Hotel Ratings',
//           data: safeHotels.map(hotel => hotel.rating),
//           backgroundColor: '#2196F3',
//           borderRadius: 8,
//         }]
//       },
//       options: { responsive: true, plugins: { legend: { display: true } } }
//     });

//     const districtStats = hotelData.reduce((acc, hotel) => {
//       if (!acc[hotel.district]) acc[hotel.district] = { safe: 0, violation: 0 };
//       acc[hotel.district][hotel.status]++;
//       return acc;
//     }, {});

//     const ctx3 = document.getElementById('districtChart');
//     districtChartRef.current = new Chart(ctx3, {
//       type: 'bar',
//       data: {
//         labels: Object.keys(districtStats),
//         datasets: [
//           {
//             label: 'Safe Hotels',
//             data: Object.values(districtStats).map(stat => stat.safe),
//             backgroundColor: '#4CAF50',
//             borderRadius: 8,
//           },
//           {
//             label: 'Violations',
//             data: Object.values(districtStats).map(stat => stat.violation),
//             backgroundColor: '#F44336',
//             borderRadius: 8,
//           },
//         ]
//       },
//       options: { responsive: true, plugins: { legend: { display: true } } }
//     });
//   };

//   useEffect(() => {
//     updateCharts();
//     const interval = setInterval(updateCharts, 15000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Minister Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
//           <MapContainer center={[10.8505, 76.2711]} zoom={7} style={{ height: '100%', width: '100%' }}>
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             {hotelData.map(hotel => (
//               <Marker key={hotel.id} position={[hotel.lat, hotel.lng]} icon={getMarkerIcon(hotel.status)}>
//                 <Popup>{hotel.name}</Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>

//         <div className="space-y-8">
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">Hotel Compliance Overview</h2>
//             <canvas id="complianceChart"></canvas>
//           </div>

//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">Safe Hotels Performance</h2>
//             <canvas id="performanceChart"></canvas>
//           </div>

//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">District-wise Performance</h2>
//             <canvas id="districtChart"></canvas>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const initialDistrictData = [
  { name: 'Ernakulam', adulteration: 45 },
  { name: 'Trivandrum', adulteration: 32 },
  { name: 'Kozhikode', adulteration: 28 },
  { name: 'Kannur', adulteration: 20 },
];

const initialStateSummary = [
  { name: 'Safe', value: 120 },
  { name: 'Unsafe', value: 45 },
];

const COLORS = ['#4CAF50', '#F44336'];

const getRandomData = () =>
  initialDistrictData.map((item) => ({
    ...item,
    adulteration: Math.floor(Math.random() * 50) + 10,
  }));

const getRandomStateSummary = () => [
  { name: 'Safe', value: Math.floor(Math.random() * 150) + 50 },
  { name: 'Unsafe', value: Math.floor(Math.random() * 100) + 20 },
];

const getRandomInspectionData = () => [
  { name: 'Completed', value: Math.floor(Math.random() * 100) + 50 },
  { name: 'Pending', value: Math.floor(Math.random() * 50) + 20 },
];

export function MinisterDashboard() {
  const [view, setView] = useState('bar');
  const [districtData, setDistrictData] = useState(initialDistrictData);
  const [stateSummary, setStateSummary] = useState(initialStateSummary);
  const [inspectionData, setInspectionData] = useState(getRandomInspectionData());

  useEffect(() => {
    const interval = setInterval(() => {
      setDistrictData(getRandomData());
      setStateSummary(getRandomStateSummary());
      setInspectionData(getRandomInspectionData());
      setView((prev) => (prev === 'bar' ? 'line' : prev === 'line' ? 'pie' : 'bar'));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8 bg-white text-gray-900">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Minister Dashboard</h1>
        <button
          onClick={() => setView(view === 'bar' ? 'line' : view === 'line' ? 'pie' : 'bar')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Toggle Chart
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Adulteration by District</h2>
          <ResponsiveContainer width="100%" height={300}>
            {view === 'bar' ? (
              <BarChart data={districtData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="adulteration" fill="#3B82F6" barSize={50} />
              </BarChart>
            ) : view === 'line' ? (
              <LineChart data={districtData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="adulteration" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            ) : (
              <PieChart>
                <Pie data={districtData} dataKey="adulteration" nameKey="name" outerRadius={120}>
                  {districtData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Statewide Safety Summary</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={stateSummary} dataKey="value" nameKey="name" outerRadius={120}>
                {stateSummary.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Inspection Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={inspectionData} dataKey="value" nameKey="name" outerRadius={120}>
                {inspectionData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}


