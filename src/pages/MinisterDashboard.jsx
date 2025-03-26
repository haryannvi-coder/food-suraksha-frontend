import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function MinisterDashboard() {
  const [districtAdulterationData, setDistrictAdulterationData] = useState([]);

  async function fetchHotelData() {
    try {
      const response = await axios.get("https://food-suraksha-backend-2.onrender.com/api/v1/fso/hotelData");
      // const response = await axios.get("http://localhost:3005/api/v1/fso/hotelData");
      const data = response.data;

      // Group by district and store unique hotel names
      const districtCounts = data.reduce((acc, hotel) => {
        const { district, hotel_name } = hotel;

        if (!acc[district]) {
          acc[district] = { count: 0, hotels: new Set() };
        }

        acc[district].hotels.add(hotel_name);
        acc[district].count = acc[district].hotels.size; // Count unique hotels

        return acc;
      }, {});

      // Convert to array format for Recharts
      const chartData = Object.entries(districtCounts).map(([district, details]) => ({
        district,
        adulterated: details.count,
        hotelNames: Array.from(details.hotels).join(", "), // Convert Set to string for tooltip
      }));

      setDistrictAdulterationData(chartData);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  }

  useEffect(() => {
    fetchHotelData();
    const interval = setInterval(fetchHotelData, 20000);
    return () => clearInterval(interval);
  }, []);

  // Custom Tooltip to show hotel names
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow-md">
          <p className="font-bold">{payload[0].payload.district}</p>
          <p>Adulterated Hotels: {payload[0].value}</p>
          <p className="text-sm text-gray-600">{payload[0].payload.hotelNames}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Adulterated Hotels by District</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={districtAdulterationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="district" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="adulterated" stroke="#ff0000" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}



