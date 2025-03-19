// import { useState, useEffect } from "react";


// export function Alerts() {
//   const [hotels, setHotels] = useState([]);
//   const [selectedHotel, setSelectedHotel] = useState(null); // For modal

//   const fetchHotelData = async () => {
//     try {
//       const response = await fetch("https://food-suraksha-backend.onrender.com/api/v1/fso/hotelData");
//       const data = await response.json();

//       const mergedHotels = Object.values(
//         data.reduce((acc, hotel) => {
//           if (!acc[hotel.hotel_name]) {
//             acc[hotel.hotel_name] = {
//               ...hotel,
//               sanitation: [hotel.sanitation],
//               images: [hotel.image], // Store images
//             };
//           } else {
//             if (!acc[hotel.hotel_name].sanitation.includes(hotel.sanitation)) {
//               acc[hotel.hotel_name].sanitation.push(hotel.sanitation);
//             }
//             acc[hotel.hotel_name].images.push(hotel.image); // Append images
//           }

//           if (hotel.ml_model_output === 1) {
//             acc[hotel.hotel_name].ml_model_output = 1;
//           }

//           return acc;
//         }, {})
//       );

//       mergedHotels.forEach((hotel) => {
//         hotel.sanitation = hotel.sanitation.join(", ");
//       });

//       setHotels(mergedHotels);
//     } catch (error) {
//       console.error("Error fetching hotel data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchHotelData();
//     const interval = setInterval(fetchHotelData, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 p-8">
//         <h1 className="text-3xl font-bold mb-8 text-center">Hotel Adulteration Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {hotels.map((hotel) => (
//             <div
//               key={hotel.id_number}
//               className={`p-6 rounded-2xl shadow-xl transition-colors cursor-pointer bg-red-500 text-white`}
//               onClick={() => setSelectedHotel(hotel)} // Open modal on click
//             >
//               <h2 className="text-xl font-semibold">{hotel.hotel_name}</h2>
//               <p className="mt-2">District: {hotel.district}</p>
//               <p className="mt-2">Sanitation Issue: {hotel.sanitation}</p>
//               <p className="mt-2">
//                 Timestamp:{" "}
//                 {new Date(hotel.timestamp + "Z").toLocaleString("en-IN", {
//                   timeZone: "Asia/Kolkata",
//                 })}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedHotel && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
//           <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full">
//             <h2 className="text-xl font-semibold mb-2">{selectedHotel.hotel_name}</h2>
//             <p className="text-gray-600 mb-4">{selectedHotel.sanitation}</p>

//             <div className="grid grid-cols-2 gap-4">
//               {selectedHotel.images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={`data:image/jpeg;base64,${img}`}
//                   alt="Sanitation Issue"
//                   className="rounded-lg w-full h-32 object-cover"
//                 />
//               ))}
//             </div>

//             <button
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
//               onClick={() => setSelectedHotel(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import { useState, useEffect } from "react";

export function Alerts() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const districts = ["Alappuzha", "Idukki", "Kollam", "Kottayam", "Thiruvananthapuram"];

  const fetchHotelData = async () => {
    try {
      const response = await fetch("https://food-suraksha-backend.onrender.com/api/v1/fso/hotelData");
      const data = await response.json();

      const mergedHotels = Object.values(
        data.reduce((acc, hotel) => {
          if (!acc[hotel.hotel_name]) {
            acc[hotel.hotel_name] = {
              ...hotel,
              sanitation: [hotel.sanitation],
              images: [hotel.image],
            };
          } else {
            if (!acc[hotel.hotel_name].sanitation.includes(hotel.sanitation)) {
              acc[hotel.hotel_name].sanitation.push(hotel.sanitation);
            }
            acc[hotel.hotel_name].images.push(hotel.image);
          }

          if (hotel.ml_model_output === 1) {
            acc[hotel.hotel_name].ml_model_output = 1;
          }

          return acc;
        }, {})
      );

      mergedHotels.forEach((hotel) => {
        hotel.sanitation = hotel.sanitation.join(", ");
      });

      setHotels(mergedHotels);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  useEffect(() => {
    fetchHotelData();
    const interval = setInterval(fetchHotelData, 10000);
    return () => clearInterval(interval);
  }, []);

  const filteredHotels = selectedDistrict
    ? hotels.filter((hotel) => hotel.district === selectedDistrict)
    : hotels;

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Hotel Adulteration Dashboard</h1>
        
        <div className="mb-6 flex justify-center">
          <select
            className="p-2 border border-gray-300 rounded-lg"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">All Districts</option>
            {districts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id_number}
              className="p-6 rounded-2xl shadow-xl transition-colors cursor-pointer bg-red-500 text-white"
              onClick={() => setSelectedHotel(hotel)}
            >
              <h2 className="text-xl font-semibold">{hotel.hotel_name}</h2>
              <p className="mt-2">Sanitation Issue: {hotel.sanitation}</p>
              <p className="mt-2">
                Timestamp: {new Date(hotel.timestamp + "Z").toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedHotel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-2">{selectedHotel.hotel_name}</h2>
            <p className="text-gray-600 mb-4">{selectedHotel.sanitation}</p>
            <div className="grid grid-cols-2 gap-4">
              {selectedHotel.images.map((img, index) => (
                <img
                  key={index}
                  src={`data:image/jpeg;base64,${img}`}
                  alt="Sanitation Issue"
                  className="rounded-lg w-full h-32 object-cover"
                />
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setSelectedHotel(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}




