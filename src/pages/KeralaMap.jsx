// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { useNavigate } from 'react-router-dom';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for missing marker icons
// const customIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconSize: [25, 41], // Default size
//   iconAnchor: [12, 41], // Default anchor
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });




// export function KeralaMap() {
//   const navigate = useNavigate();

//   const handleMarkerClick = (id) => {
//     navigate(`/hoteldetails/${id}`);
//   };

//   return (
//     <div className="min-h-screen">
//       <h2 className="font-bold text-center mb-8">Hotels in Trivandrum, Kerala</h2>
//       <MapContainer center={[8.5241, 76.9366]} zoom={13} className="h-[600px] w-full rounded-lg shadow-lg">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />
//         {hotels.map((hotel) => (
//           <Marker
//             key={hotel.id}
//             position={[hotel.lat, hotel.lng]}
//             icon={customIcon} // Apply the custom marker icon
//             eventHandlers={{ click: () => handleMarkerClick(hotel.id) }}
//           >
//             <Popup>{hotel.name}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }



// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { useNavigate } from 'react-router-dom';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for missing marker icons
// const customIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconSize: [25, 41], // Default size
//   iconAnchor: [12, 41], // Default anchor
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

// export const locations = [
//   {
//     name: "Alappuzha",
//     coordinates: [9.4981, 76.3388],
//     hotels: [
//       { id: 7, name: "Lake Palace Resort", lat: 9.5, lon: 76.3 },
//       { id: 8, name: "Citrus Retreats Alleppey", lat: 9.51, lon: 76.32 },
//       { id: 9, name: "Marari Beach Resort", lat: 9.49, lon: 76.34 },
//     ],
//   },
//   {
//     name: "Idukki",
//     coordinates: [9.85, 76.97],
//     hotels: [
//       { id: 13, name: "Spicy Tree Munnar", lat: 9.83, lon: 76.95 },
//       { id: 14, name: "Silver Tips", lat: 9.87, lon: 76.99 },
//       { id: 15, name: "Chandy's Windy Woods", lat: 9.85, lon: 76.97 },
//     ],
//   },
//   {
//     name: "Kollam",
//     coordinates: [8.8932, 76.6141],
//     hotels: [
//       { id: 4, name: "Hotel Sea Palace", lat: 8.89, lon: 76.61 },
//       { id: 5, name: "Raviz Ashtamudi", lat: 8.90, lon: 76.62 },
//       { id: 6, name: "Quilon Beach Hotel", lat: 8.91, lon: 76.63 },
//     ],
//   },
//   {
//     name: "Kottayam",
//     coordinates: [9.5916, 76.5222],
//     hotels: [
//       { id: 10, name: "Aveda Kumarakom", lat: 9.58, lon: 76.52 },
//       { id: 11, name: "Coconut Lagoon", lat: 9.59, lon: 76.53 },
//       { id: 12, name: "Abad Whispering Palms", lat: 9.60, lon: 76.54 },
//     ],
//   },
//   {
//     name: "Thiruvananthapuram",
//     coordinates: [8.5241, 76.9366],
//     hotels: [
//       { id: 1, name: "Hycinth Hotels", lat: 8.52, lon: 76.93 },
//       { id: 2, name: "The Leela Kovalam", lat: 8.53, lon: 76.94 },
//       { id: 3, name: "Apollo Dimora", lat: 8.51, lon: 76.92 },
//     ],
//   },
// ];

// export function KeralaMap() {
//   const navigate = useNavigate();

//   const handleMarkerClick = (id) => {
//     navigate(`/hoteldetails/${id}`);
//   };

//   return (
//     <div className="min-h-screen">
//       <h2 className="font-bold text-center mb-8">Hotels in Kerala</h2>
//       <MapContainer center={[8.5241, 76.9366]} zoom={8} className="h-screen w-full rounded-lg shadow-lg">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />
//         {locations.map((location) =>
//           location.hotels.map((hotel) => (
//             <Marker
//               key={hotel.id}
//               position={[hotel.lat, hotel.lon]}
//               icon={customIcon} // Apply the custom marker icon
//               eventHandlers={{ click: () => handleMarkerClick(hotel.id) }}
//             >
//               <Popup>{hotel.name}</Popup>
//             </Marker>
//           ))
//         )}
//       </MapContainer>
//     </div>
//   );
// }




// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { useNavigate } from 'react-router-dom';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for missing marker icons
// const customIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconSize: [25, 41], // Default size
//   iconAnchor: [12, 41], // Default anchor
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

// export const locations = [
//   {
//     name: "Alappuzha",
//     coordinates: [9.4981, 76.3388],
//     hotels: [
//       { id: 7, name: "Lake Palace Resort", lat: 9.5, lon: 76.4001 },
//       { id: 8, name: "Citrus Retreats Alleppey", lat: 9.51, lon: 76.32 },
//       { id: 9, name: "Marari Beach Resort", lat: 9.49, lon: 76.34 },
//     ],
//   },
//   {
//     name: "Idukki",
//     coordinates: [9.85, 76.97],
//     hotels: [
//       { id: 13, name: "Spicy Tree Munnar", lat: 9.83, lon: 76.95 },
//       { id: 14, name: "Silver Tips", lat: 9.87, lon: 76.99 },
//       { id: 15, name: "Chandy's Windy Woods", lat: 9.85, lon: 76.97 },
//     ],
//   },
//   {
//     name: "Kollam",
//     coordinates: [8.8932, 76.6141],
//     hotels: [
//       { id: 4, name: "Hotel Sea Palace", lat: 8.89, lon: 76.61 },
//       { id: 5, name: "Raviz Ashtamudi", lat: 8.90, lon: 76.62 },
//       { id: 6, name: "Quilon Beach Hotel", lat: 8.91, lon: 76.63 },
//     ],
//   },
//   {
//     name: "Kottayam",
//     coordinates: [9.5916, 76.5222],
//     hotels: [
//       { id: 10, name: "Aveda Kumarakom", lat: 9.58, lon: 76.52 },
//       { id: 11, name: "Coconut Lagoon", lat: 9.59, lon: 76.53 },
//       { id: 12, name: "Abad Whispering Palms", lat: 9.60, lon: 76.54 },
//     ],
//   },
//   {
//     name: "Thiruvananthapuram",
//     coordinates: [8.5241, 76.9366],
//     hotels: [
//       { id: 1, name: "Hycinth Hotels", lat: 8.52, lon: 76.93 },
//       { id: 2, name: "The Leela Kovalam", lat: 8.53, lon: 76.94 },
//       { id: 3, name: "Apollo Dimora", lat: 8.51, lon: 76.92 },
//     ],
//   },
// ];

// export function KeralaMap() {
//   const navigate = useNavigate();

//   const handleMarkerClick = (id) => {
//     navigate(`/hoteldetails/${id}`);
//   };

//   return (
//     <div className="min-h-screen">
//       <h2 className="font-bold text-center mb-8">Hotels in Kerala</h2>
//       <MapContainer center={[8.5241, 76.9366]} zoom={8} className="h-screen w-full rounded-lg shadow-lg">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />
//         {locations.map((location) =>
//           location.hotels.map((hotel) => (
//             <Marker
//               key={hotel.id}
//               position={[hotel.lat, hotel.lon]}
//               icon={customIcon} // Apply the custom marker icon
//               eventHandlers={{ click: () => handleMarkerClick(hotel.id) }}
//             >
//               <Popup>{hotel.name}</Popup>
//             </Marker>
//           ))
//         )}
//       </MapContainer>
//     </div>
//   );
// }




import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icons
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});


export const hotels = [
  { id: 1, name: "Hycinth Hotels", district: "Thirauvananthapuram", lat: 8.52, lon: 76.93 },
  { id: 2, name: "The Leela Kovalam", district: "Thirauvananthapuram", lat: 8.53, lon: 76.94 },
  { id: 3, name: "Apollo Dimora", district: "Thirauvananthapuram", lat: 8.51, lon: 76.92 },
  { id: 4, name: "Hotel Sea Palace", district: "Kollam", lat: 8.89, lon: 76.61 },
  { id: 5, name: "Raviz Ashtamudi", district: "Kollam", lat: 8.90, lon: 76.62 },
  { id: 6, name: "Quilon Beach Hotel", district: "Kollam", lat: 8.91, lon: 76.63 },
  { id: 7, name: "Lake Palace Resort", district: "Alappuzha", lat: 9.5, lon: 76.4001 },
  { id: 8, name: "Citrus Retreats Alleppey", district: "Alappuzha", lat: 9.51, lon: 76.32 },
  { id: 9, name: "Marari Beach Resort", district: "Alappuzha", lat: 9.49, lon: 76.34 },
  { id: 10, name: "Aveda Kumarakom", district: "Kottayam", lat: 9.58, lon: 76.52 },
  { id: 11, name: "Coconut Lagoon", district: "Kottayam", lat: 9.59, lon: 76.53 },
  { id: 12, name: "Abad Whispering Palms", district: "Kottayam", lat: 9.60, lon: 76.54 },
  { id: 13, name: "Spicy Tree Munnar", district: "Idukki", lat: 9.83, lon: 76.95 },
  { id: 14, name: "Silver Tips", district: "Idukki", lat: 9.87, lon: 76.99 },
  { id: 15, name: "Chandy's Windy Woods", district: "Idukki", lat: 9.85, lon: 76.97 },
];

export const locations = [
  { name: "Alappuzha", coordinates: [9.4981, 76.3388], hotels: [
      { id: 7, name: "Lake Palace Resort", lat: 9.5, lon: 76.4001 },
      { id: 8, name: "Citrus Retreats Alleppey", lat: 9.51, lon: 76.32 },
      { id: 9, name: "Marari Beach Resort", lat: 9.49, lon: 76.34 },
    ],
  },
  { name: "Idukki", coordinates: [9.85, 76.97], hotels: [
      { id: 13, name: "Spicy Tree Munnar", lat: 9.83, lon: 76.95 },
      { id: 14, name: "Silver Tips", lat: 9.87, lon: 76.99 },
      { id: 15, name: "Chandy's Windy Woods", lat: 9.85, lon: 76.97 },
    ],
  },
  { name: "Kollam", coordinates: [8.8932, 76.6141], hotels: [
      { id: 4, name: "Hotel Sea Palace", lat: 8.89, lon: 76.61 },
      { id: 5, name: "Raviz Ashtamudi", lat: 8.90, lon: 76.62 },
      { id: 6, name: "Quilon Beach Hotel", lat: 8.91, lon: 76.63 },
    ],
  },
  { name: "Kottayam", coordinates: [9.5916, 76.5222], hotels: [
      { id: 10, name: "Aveda Kumarakom", lat: 9.58, lon: 76.52 },
      { id: 11, name: "Coconut Lagoon", lat: 9.59, lon: 76.53 },
      { id: 12, name: "Abad Whispering Palms", lat: 9.60, lon: 76.54 },
    ],
  },
  { name: "Thiruvananthapuram", coordinates: [8.5241, 76.9366], hotels: [
      { id: 1, name: "Hycinth Hotels", lat: 8.52, lon: 76.93 },
      { id: 2, name: "The Leela Kovalam", lat: 8.53, lon: 76.94 },
      { id: 3, name: "Apollo Dimora", lat: 8.51, lon: 76.92 },
    ],
  },
];

export function KeralaMap() {
  const [selectedDistrict, setSelectedDistrict] = useState(locations[0].name);

  // Find the selected district's data
  const districtData = locations.find((loc) => loc.name === selectedDistrict);

  return (
    <div className="min-h-screen">
      {/* Dropdown to select district */}
      <div className="flex justify-center my-4">
        <label className="mr-2 font-semibold text-3xl">Select District:</label>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="border p-2 rounded-md"
        >
          {locations.map((district) => (
            <option key={district.name} value={district.name}>
              {district.name}
            </option>
          ))}
        </select>
      </div>

      <h2 className="font-bold text-3xl text-center mb-8">Hotels in {selectedDistrict}</h2>

      {/* Show Map Only if District Data Exists */}
      {districtData ? (
        <MapContainer
          center={districtData.coordinates}
          zoom={10}
          className="h-screen w-full rounded-lg shadow-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
          {districtData.hotels.map((hotel) => (
            <Marker key={hotel.id} position={[hotel.lat, hotel.lon]} icon={customIcon}>
              <Popup>{hotel.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <p className="text-center">No data available for this district</p>
      )}
    </div>
  );
}











// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const districts = [
//   {
//     name: "Alappuzha",
//     coordinates: [9.4981, 76.3388],
//     hotels: [
//       { id: 7, name: "Lake Palace Resort", lat: 9.5, lon: 76.3 },
//       { id: 8, name: "Citrus Retreats Alleppey", lat: 9.51, lon: 76.32 },
//       { id: 9, name: "Marari Beach Resort", lat: 9.49, lon: 76.34 },
//     ],
//   },
//   {
//     name: "Idukki",
//     coordinates: [9.85, 76.97],
//     hotels: [
//       { id: 13, name: "Spicy Tree Munnar", lat: 9.83, lon: 76.95 },
//       { id: 14, name: "Silver Tips", lat: 9.87, lon: 76.99 },
//       { id: 15, name: "Chandy's Windy Woods", lat: 9.85, lon: 76.97 },
//     ],
//   },
//   {
//     name: "Kollam",
//     coordinates: [8.8932, 76.6141],
//     hotels: [
//       { id: 4, name: "Hotel Sea Palace", lat: 8.89, lon: 76.61 },
//       { id: 5, name: "Raviz Ashtamudi", lat: 8.90, lon: 76.62 },
//       { id: 6, name: "Quilon Beach Hotel", lat: 8.91, lon: 76.63 },
//     ],
//   },
//   {
//     name: "Kottayam",
//     coordinates: [9.5916, 76.5222],
//     hotels: [
//       { id: 10, name: "Aveda Kumarakom", lat: 9.58, lon: 76.52 },
//       { id: 11, name: "Coconut Lagoon", lat: 9.59, lon: 76.53 },
//       { id: 12, name: "Abad Whispering Palms", lat: 9.60, lon: 76.54 },
//     ],
//   },
//   {
//     name: "Thiruvananthapuram",
//     coordinates: [8.5241, 76.9366],
//     hotels: [
//       { id: 1, name: "Hycinth Hotels", lat: 8.52, lon: 76.93 },
//       { id: 2, name: "The Leela Kovalam", lat: 8.53, lon: 76.94 },
//       { id: 3, name: "Apollo Dimora", lat: 8.51, lon: 76.92 },
//     ],
//   },
// ];

// export function KeralaMap () {
//   const [selectedDistrict, setSelectedDistrict] = useState(null);

//   return (
//     <div className="flex">
//       <div className="w-1/4 p-4 bg-gray-200">
//         <h2 className="text-lg font-bold">Select District</h2>
//         <ul>
//           {districts.map((district) => (
//             <li
//               key={district.name}
//               className="cursor-pointer p-2 hover:bg-gray-300"
//               onClick={() => setSelectedDistrict(district)}
//             >
//               {district.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-3/4 h-screen">
//         {selectedDistrict ? (
//           <MapContainer
//             center={selectedDistrict.coordinates}
//             zoom={10}
//             className="h-full w-full"
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {selectedDistrict.hotels.map((hotel) => (
//               <Marker key={hotel.id} position={[hotel.lat, hotel.lon]}>
//                 <Popup>{hotel.name}</Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <p>Select a district to view the map</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



