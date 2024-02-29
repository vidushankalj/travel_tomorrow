import React from 'react';

import Selection from '../components/Selection'
import bgVideo from '../assets/Hotel_Video.mp4';



  const destinations = [
    { id: 1, name: 'Mount Blue Kandy', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1e/ca/e5/mount-blue-kandy.jpg?w=700&h=-1&s=1' },
    { id: 2, name: 'Tamarind Hill', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5d/85/3f/courtyard.jpg?w=700&h=-1&s=1' },
    { id: 3, name: 'The Lvy Lake', image: 'https://lh3.googleusercontent.com/p/AF1QipMsc4JwtxpsmGf-dP0NpYgMd9ZfH60uKyU8-fnM=w287-h192-n-k-rw-no-v1' },
    { id: 4, name: 'Hotel J Negambo', image: 'https://lh5.googleusercontent.com/proxy/1-lotMjKjCCBEU08b87_4grkGY2JHxcBesmZ46us-bxcvI7nan1jyn0G8KC7dd5cLPRSoGlhqSR8nGDLJF2PSfOM7F451SZtf3Xk08naRFSYPdcuqFKJMRll_f8s0HgTb0OJymSImsBxu0hdwXLGGUoVoNYZpw=w253-h168-k-no' },
    { id: 5, name: 'Marino Beach Colombo', image: 'https://pix10.agoda.net/hotelImages/37200934/0/10d24666c77f9de4d3e382291a87175e.jpg?ce=0&s=414x232' },
    { id: 6, name: 'Jetwing Jaffna', image: 'https://lh5.googleusercontent.com/p/AF1QipPdunrH9F0tHALY2H-4kVuhZ9oN6An-rx8Mu4md=w253-h379-k-no' },
    // Add more destinations as needed
  ];
function Hotels() {
  return (
    <>
    <div className="container mx-auto mt-8">

    <video
        src={bgVideo}
        className='w-full h-full object-cover mb-4'
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>

      {/* <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white font-custom">
          <h1 className="text-4xl font-bold mb-4">Hotels & Resturants</h1>
          <p className="text-lg mb-8">Indulge in luxury and comfort at Sri Lanka's exquisite hotels and restaurants. From beachfront resorts offering panoramic views of the Indian Ocean to charming boutique hotels nestled in the heart of cultural cities, the accommodation options are as diverse as the island itself. Immerse yourself in the culinary delights of Sri Lanka, where traditional spices and flavors come to life. Whether you're savoring authentic Sri Lankan cuisine in a local eatery or dining in a world-class restaurant, the gastronomic experience is nothing short of exceptional. Discover a blend of warm hospitality, mouthwatering dishes, and elegant accommodations that make Sri Lanka a perfect destination for those seeking a memorable and immersive travel experience.</p>
        </div>
      </div> */}


      <h1 className="text-4xl font-bold mb-6">Hotels & Resturants</h1>

      <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
        {destinations.map((destination) => (
            <Selection figure={destination.image} caption={destination.name}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Hotels