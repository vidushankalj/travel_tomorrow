import React from 'react';
import { Link } from "react-router-dom";
import Selection from '../components/Selection'
import HotelVideo from '../assets/Hotel_Video.mp4';
import Pageshero from '../components/Pageshero';



  const destinations = [
    { id: 1, name: 'Mount Blue Kandy', town: 'Kandy', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1e/ca/e5/mount-blue-kandy.jpg?w=700&h=-1&s=1' },
    { id: 2, name: 'Tamarind Hill', town: 'Galle', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5d/85/3f/courtyard.jpg?w=700&h=-1&s=1' },
    { id: 3, name: 'The Lvy Lake', town: 'Anuradhapura', image: 'https://lh3.googleusercontent.com/p/AF1QipMsc4JwtxpsmGf-dP0NpYgMd9ZfH60uKyU8-fnM=w287-h192-n-k-rw-no-v1' },
    { id: 4, name: 'Hotel J Negambo', town: 'Negambo', image: 'https://lh5.googleusercontent.com/proxy/1-lotMjKjCCBEU08b87_4grkGY2JHxcBesmZ46us-bxcvI7nan1jyn0G8KC7dd5cLPRSoGlhqSR8nGDLJF2PSfOM7F451SZtf3Xk08naRFSYPdcuqFKJMRll_f8s0HgTb0OJymSImsBxu0hdwXLGGUoVoNYZpw=w253-h168-k-no' },
    { id: 5, name: 'Marino Beach Colombo', town: 'Colombo', image: 'https://pix10.agoda.net/hotelImages/37200934/0/10d24666c77f9de4d3e382291a87175e.jpg?ce=0&s=414x232' },
    { id: 6, name: 'Jetwing Jaffna', town: 'Jaffna', image: 'https://lh5.googleusercontent.com/p/AF1QipPdunrH9F0tHALY2H-4kVuhZ9oN6An-rx8Mu4md=w253-h379-k-no' },
    // Add more destinations as needed
  ];
function Hotels() {
  return (
    <>
     
      <Pageshero bgVideo={HotelVideo} title={"A Tapestry of Luxury Hotels and Culinary Delights"} message={"Experience Sri Lanka's allure in its elegant hotels and vibrant restaurants. From opulent accommodations to delectable local flavors, immerse yourself in unmatched hospitality amid the island's enchanting beauty."}/>

      <div className="container mx-auto mt-8 w-full">

      <h1 className="text-4xl font-bold mb-6">Hotels & Resturants</h1>

      <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
        {destinations.map((destination) => (
          <Link to='/tPlace'>
            <Selection figure={destination.image} caption={destination.name}/>
          </Link>  
        ))}
      </div>
    </div>
    </>
  )
}

export default Hotels