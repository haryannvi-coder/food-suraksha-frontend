import React from 'react';
import { HotelCard } from '../components/HotelCard';
import { useNavigate } from 'react-router-dom';

export function AllHotelsGalleryDashboard () {
  const navigate = useNavigate();
  

  const hotels = [
    { name: 'Serene Bay Hotel', location: 'Trivandrum, India' },
    { name: 'Crystal Lake Resort', location: 'Trivandrum, India' },
    { name: 'Sunset View Inn', location: 'Trivandrum, India' },
    { name: 'Royal Palm Suites', location: 'Trivandrum, India' },
    { name: 'Sea Breeze Hotel', location: 'Trivandrum, India' },
    { name: 'Golden Orchid Inn', location: 'Trivandrum, India' },
    { name: 'Trivandrum Grand Residency', location: 'Trivandrum, India' },
    { name: 'Green Valley Retreat', location: 'Trivandrum, India' },
    { name: 'Blue Horizon Resort', location: 'Trivandrum, India' },
    { name: 'Palm Grove Stay', location: 'Trivandrum, India' },
  ];

  const handleNavigation = (index) => {
    navigate(`/hotelgallery/${index}`);
  };


  return <>
    <h1>Hotels</h1>
    <div className='flex flex-wrap gap-20' >
      {hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          name={hotel.name}
          location={hotel.location}
          onClick={() => handleNavigation(index)}
        />
      ))}
    </div>


  </>
}







