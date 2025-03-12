import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

export const hotels = [
  {
    id: 1,
    name: 'Hotel Green Paradise',
    lat: 8.5241,
    lng: 76.9366,
    owner: 'Rajesh Kumar',
    license: 'KRL12345',
    penalties: 'None',
  },
  {
    id: 2,
    name: 'Ocean View Resort',
    lat: 8.5283,
    lng: 76.9407,
    owner: 'Meera Nair',
    license: 'KRL67890',
    penalties: '2 pending warnings',
  },
  {
    id: 3,
    name: 'Royal Heritage Inn',
    lat: 8.5305,
    lng: 76.9352,
    owner: 'Vijay Menon',
    license: 'KRL11223',
    penalties: '1 fine for sanitation issue',
  },
  {
    id: 4,
    name: 'Palm Grove Stay',
    lat: 8.5215,
    lng: 76.9389,
    owner: 'Anjali Pillai',
    license: 'KRL44556',
    penalties: 'None',
  },
];

export function KeralaMap() {
  const navigate = useNavigate();

  const handleMarkerClick = (id) => {
    navigate(`/hoteldetails/${id}`);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8"> Hotels in Trivendrum, Kerala</h1>
      <MapContainer center={[8.5241, 76.9366]} zoom={13} className="h-[600px] w-full rounded-lg shadow-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {hotels.map((hotel) => (
          <Marker
            key={hotel.id}
            position={[hotel.lat, hotel.lng]}
            eventHandlers={{ click: () => handleMarkerClick(hotel.id) }}
          >
            <Popup>{hotel.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
