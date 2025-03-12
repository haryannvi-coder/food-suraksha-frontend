import { useState, useEffect } from "react";

export function Alerts() {
  const [hotels, setHotels] = useState([]);

  const fetchHotelData = async () => {
    try {
      const response = await fetch("https://food-suraksha-backend.onrender.com/api/v1/fso/hotelData");
      const data = await response.json();

      // Merge records by hotel name and determine status
      const mergedHotels = Object.values(
        data.reduce((acc, hotel) => {
          if (!acc[hotel.hotel_name]) {
            acc[hotel.hotel_name] = { ...hotel };
          }
          // If any record has ml_model_output = 1, mark the hotel as red
          if (hotel.ml_model_output === 1) {
            acc[hotel.hotel_name].ml_model_output = 1;
          }
          return acc;
        }, {})
      );

      setHotels(mergedHotels);
      console.log(mergedHotels);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  useEffect(() => {
    fetchHotelData();
    const interval = setInterval(fetchHotelData, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hotel Adulteration Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id_number}
            className={`p-6 rounded-2xl shadow-xl transition-colors ${
              hotel.ml_model_output === 1 ? "bg-red-500" : "bg-green-500"
            } text-white`}
          >
            <h2 className="text-xl font-semibold">{hotel.hotel_name}</h2>
            <p className="mt-2">Sanitation Issue: {hotel.sanitation}</p>
            <p className="mt-2">Timestamp: {new Date(hotel.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


