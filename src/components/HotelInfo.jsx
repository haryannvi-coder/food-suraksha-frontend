import { useNavigate } from 'react-router-dom';


export function HotelInfo({ hotel, id }) {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen p-8">
        <h2 className="text-4xl font-bold mb-6">{hotel.name}</h2>
        <p className="text-xl">License: {hotel.district}</p>
        <button onClick={() => navigate(`/hotelgallery/${id}`)} > Gallery </button>
      </div>
    );
}
  