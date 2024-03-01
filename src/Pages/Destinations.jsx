import React from 'react'
import Navbar from '../components/Navbar'
import Selection from '../components/Selection';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const destinations = [
  { id: 1, name: 'Unawatuna Beach', image: 'https://media.istockphoto.com/id/1346702516/photo/tables-and-chairs-on-a-tropical-beach.jpg?s=612x612&w=0&k=20&c=FETGf35MRVn_ELEJAwbmqOruYiFaOSB4r8BVLJnIGuw=' },
  { id: 2, name: 'Temple of the Tooth Relic', image: 'https://media.istockphoto.com/id/502631824/photo/temple-of-the-tooth-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=2ltjIh94gedLEJ0rgu8djEXhrfatIcVBZCH6WVr3z0k=' },
  { id: 3, name: 'Ruwanweli Maha Seya', image: 'https://media.istockphoto.com/id/899422212/photo/ruwanwelisaya-stupa-in-anuradhapura-sri-lanka.jpg?s=612x612&w=0&k=20&c=hCLRxyhXXqn3-i19hhzSji_JaiopIe8aHpL7qwO9hbw=' },
  { id: 4, name: 'Nallur Kovil', image: 'https://media.istockphoto.com/id/1197155454/photo/nallur-kovil-jaffna.jpg?s=612x612&w=0&k=20&c=yXzVrH9HwxML5IPLgrsr4MRXgkl1Q2toWYrky8jfFKA=' },
  { id: 5, name: 'Red Mosque', image: 'https://media.istockphoto.com/id/1346278317/photo/red-mosque-in-colombo.jpg?s=612x612&w=0&k=20&c=mhobndfBqqHSq_P_5e-brizNnK1C9rH01Y9bDnnbbsA=' },
  { id: 6, name: 'Nine Arch Bridge', image: 'https://media.istockphoto.com/id/822722846/photo/nine-arches-bridge-demodara-in-ella-sri-lanka.jpg?s=612x612&w=0&k=20&c=68BrIXYAXg1v1etgJSSBm4h9G_kADUB8A9_eoyEJMVo=' },
  // Add more destinations as needed
];

import bgVideo from '../assets/beachVid.mp4';

function Destinations() {
  return (
    <>
    <Navbar/>

    

    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6">Destinations</h1>

      <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
        {destinations.map((destination) => (
            <Selection figure={destination.image} caption={destination.name}/>
        ))}
      </div>
    </div>
    <Carousel/>
    <Footer/>
    </>
  )
}

export default Destinations