// export function MinisterDashboard(){
//     return <>
//     this is minister dashboard

//     </>
// }

// import { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Chart from 'chart.js/auto';

// const hotelData = [
//   { id: 1, lat: 10.8505, lng: 76.2711, status: 'safe', name: 'Hotel GreenView' },
//   { id: 2, lat: 10.7916, lng: 76.6925, status: 'violation', name: 'Hotel RedAlert' },
//   { id: 3, lat: 9.9312, lng: 76.2673, status: 'safe', name: 'Hotel BlueSky' },
//   { id: 4, lat: 11.2588, lng: 75.7804, status: 'violation', name: 'Hotel Critical' },
// ];

// const getMarkerIcon = (status) => {
//   return L.divIcon({
//     className: 'custom-icon',
//     html: `<div style="width: 12px; height: 12px; background-color: ${status === 'safe' ? 'green' : 'red'}; border-radius: 50%;"></div>`
//   });
// };

// export function MinisterDashboard() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       chartRef.current.destroy(); // Clean up previous chart
//     }

//     const ctx = document.getElementById('hotelChart');
//     chartRef.current = new Chart(ctx, {
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
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             display: true,
//           }
//         }
//       }
//     });

//     return () => chartRef.current.destroy(); // Clean up on unmount
//   }, []);

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Minister Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Map Section */}
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

//         {/* Chart Section */}
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-700">Hotel Compliance Overview</h2>
//           <canvas id="hotelChart"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// } 



import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Chart from 'chart.js/auto';

const hotelData = [
  { id: 1, lat: 10.8505, lng: 76.2711, status: 'safe', name: 'Hotel GreenView', rating: 4, district: 'Palakkad' },
  { id: 2, lat: 10.7916, lng: 76.6925, status: 'violation', name: 'Hotel RedAlert', rating: 2, district: 'Thrissur' },
  { id: 3, lat: 9.9312, lng: 76.2673, status: 'safe', name: 'Hotel BlueSky', rating: 5, district: 'Ernakulam' },
  { id: 4, lat: 11.2588, lng: 75.7804, status: 'violation', name: 'Hotel Critical', rating: 1, district: 'Kozhikode' },
  { id: 5, lat: 10.8505, lng: 76.2711, status: 'safe', name: 'Hotel Sunshine', rating: 3, district: 'Palakkad' },
];

const getMarkerIcon = (status) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div style="width: 12px; height: 12px; background-color: ${status === 'safe' ? 'green' : 'red'}; border-radius: 50%;"></div>`
  });
};

export function MinisterDashboard() {
  const complianceChartRef = useRef(null);
  const performanceChartRef = useRef(null);
  const districtChartRef = useRef(null);

  const updateCharts = () => {
    if (complianceChartRef.current) complianceChartRef.current.destroy();
    if (performanceChartRef.current) performanceChartRef.current.destroy();
    if (districtChartRef.current) districtChartRef.current.destroy();

    const ctx1 = document.getElementById('complianceChart');
    complianceChartRef.current = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Safe Hotels', 'Violations'],
        datasets: [{
          label: 'Hotel Compliance Status',
          data: [
            hotelData.filter(hotel => hotel.status === 'safe').length,
            hotelData.filter(hotel => hotel.status === 'violation').length
          ],
          backgroundColor: ['#4CAF50', '#F44336'],
          borderRadius: 8,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    });

    const safeHotels = hotelData.filter(hotel => hotel.status === 'safe');
    const ctx2 = document.getElementById('performanceChart');
    performanceChartRef.current = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: safeHotels.map(hotel => hotel.name),
        datasets: [{
          label: 'Safe Hotel Ratings',
          data: safeHotels.map(hotel => hotel.rating),
          backgroundColor: '#2196F3',
          borderRadius: 8,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    });

    const districtStats = hotelData.reduce((acc, hotel) => {
      if (!acc[hotel.district]) acc[hotel.district] = { safe: 0, violation: 0 };
      acc[hotel.district][hotel.status]++;
      return acc;
    }, {});

    const ctx3 = document.getElementById('districtChart');
    districtChartRef.current = new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: Object.keys(districtStats),
        datasets: [
          {
            label: 'Safe Hotels',
            data: Object.values(districtStats).map(stat => stat.safe),
            backgroundColor: '#4CAF50',
            borderRadius: 8,
          },
          {
            label: 'Violations',
            data: Object.values(districtStats).map(stat => stat.violation),
            backgroundColor: '#F44336',
            borderRadius: 8,
          },
        ]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    });
  };

  useEffect(() => {
    updateCharts();
    const interval = setInterval(updateCharts, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Minister Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer center={[10.8505, 76.2711]} zoom={7} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {hotelData.map(hotel => (
              <Marker key={hotel.id} position={[hotel.lat, hotel.lng]} icon={getMarkerIcon(hotel.status)}>
                <Popup>{hotel.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Hotel Compliance Overview</h2>
            <canvas id="complianceChart"></canvas>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Safe Hotels Performance</h2>
            <canvas id="performanceChart"></canvas>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">District-wise Performance</h2>
            <canvas id="districtChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
