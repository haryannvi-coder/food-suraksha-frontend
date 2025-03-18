import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";

export function Alerts() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null); // For modal

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
              images: [hotel.image], // Store images
            };
          } else {
            if (!acc[hotel.hotel_name].sanitation.includes(hotel.sanitation)) {
              acc[hotel.hotel_name].sanitation.push(hotel.sanitation);
            }
            acc[hotel.hotel_name].images.push(hotel.image); // Append images
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

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Hotel Adulteration Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id_number}
              className={`p-6 rounded-2xl shadow-xl transition-colors cursor-pointer ${
                hotel.ml_model_output === 1 ? "bg-red-500" : "bg-green-500"
              } text-white`}
              onClick={() => setSelectedHotel(hotel)} // Open modal on click
            >
              <h2 className="text-xl font-semibold">{hotel.hotel_name}</h2>
              <p className="mt-2">Sanitation Issue: {hotel.sanitation}</p>
              <p className="mt-2">
                Timestamp:{" "}
                {new Date(hotel.timestamp + "Z").toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
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




