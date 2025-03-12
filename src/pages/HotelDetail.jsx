import { useParams } from 'react-router-dom';
import { hotels } from './KeralaMap';
import { HotelInfo } from '../components/HotelInfo';

export function HotelDetail() {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) return <p>Hotel not found.</p>;

  return <HotelInfo hotel={hotel} id={id} />;
}
