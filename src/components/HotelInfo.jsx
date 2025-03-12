import { useNavigate } from 'react-router-dom';


export function HotelInfo({ hotel, id }) {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen p-8">
        <h2 className="text-4xl font-bold mb-6">{hotel.name}</h2>
        <p className="text-xl">Owner: {hotel.owner}</p>
        <p className="text-xl">License: {hotel.license}</p>
        <p className="text-xl">Penalties: {hotel.penalties}</p>
        <button onClick={() => navigate(`/hotelgallery/${id}`)} > Gallery </button>
      </div>
    );
}
  