import { useNavigate } from 'react-router-dom';

export function HotelCard1({ hotel }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/hotel/${hotel.id}`)}
      className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition cursor-pointer"
    >
      <h3 className="text-2xl font-semibold">{hotel.name}</h3>
      <p>Owner: {hotel.owner}</p>
      <p>License: {hotel.license}</p>
      <p>Penalties: {hotel.penalties}</p>
    </div>
  );
}
