import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Default anchor
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

export const hotels = [
  {
    id: 1,
    name: 'Royal Heritage Inn',
    lat: 8.5241,
    lng: 76.9366,
    owner: 'Rajesh Kumar',
    license: 'KRL12345',
    penalties: 'None',
  },
  {
    id: 2,
    name: 'Golden Orchird Inn',
    lat: 8.5283,
    lng: 76.9407,
    owner: 'Meera Nair',
    license: 'KRL67890',
    penalties: '2 pending warnings',
  },
  {
    id: 3,
    name: 'Royal Palm Suites',
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
  {
    id: 5,
    name: 'Tranquil Bay Hotel',
    lat: 8.5267,
    lng: 76.9334,
    owner: 'Suresh Reddy',
    license: 'KRL77889',
    penalties: '3 safety violations',
  },
  {
    id: 6,
    name: 'Emerald Residency',
    lat: 8.5239,
    lng: 76.9421,
    owner: 'Lakshmi Varma',
    license: 'KRL99221',
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
      <h2 className="font-bold text-center mb-8">Hotels in Trivandrum, Kerala</h2>
      <MapContainer center={[8.5241, 76.9366]} zoom={13} className="h-[600px] w-full rounded-lg shadow-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {hotels.map((hotel) => (
          <Marker
            key={hotel.id}
            position={[hotel.lat, hotel.lng]}
            icon={customIcon} // Apply the custom marker icon
            eventHandlers={{ click: () => handleMarkerClick(hotel.id) }}
          >
            <Popup>{hotel.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

