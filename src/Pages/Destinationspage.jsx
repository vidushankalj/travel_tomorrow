import React from 'react';
import { useNavigate } from 'react-router-dom';
import Selection from '../components/Selection';
import DesVideo from '../assets/Des_Video.mp4';
import Pageshero from '../components/Pageshero';
import { Link } from "react-router-dom";

const DestinationsPage = () => {
  // Dummy data for destinations
  const destinations = [
    { id: 1, name: 'Unawatuna Beach', town: 'Gall', image: 'https://media.istockphoto.com/id/1346702516/photo/tables-and-chairs-on-a-tropical-beach.jpg?s=612x612&w=0&k=20&c=FETGf35MRVn_ELEJAwbmqOruYiFaOSB4r8BVLJnIGuw=' },
    { id: 2, name: 'Temple of the Tooth Relic', town: 'Kandy', image: 'https://media.istockphoto.com/id/502631824/photo/temple-of-the-tooth-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=2ltjIh94gedLEJ0rgu8djEXhrfatIcVBZCH6WVr3z0k=' },
    { id: 3, name: 'Ruwanweli Maha Seya', town: 'Anuradhapura', image: 'https://media.istockphoto.com/id/899422212/photo/ruwanwelisaya-stupa-in-anuradhapura-sri-lanka.jpg?s=612x612&w=0&k=20&c=hCLRxyhXXqn3-i19hhzSji_JaiopIe8aHpL7qwO9hbw=' },
    { id: 4, name: 'Nallur Kovil', town: 'Jaffna', image: 'https://media.istockphoto.com/id/1197155454/photo/nallur-kovil-jaffna.jpg?s=612x612&w=0&k=20&c=yXzVrH9HwxML5IPLgrsr4MRXgkl1Q2toWYrky8jfFKA=' },
    { id: 5, name: 'Red Mosque', town: 'Colombo', image: 'https://media.istockphoto.com/id/1346278317/photo/red-mosque-in-colombo.jpg?s=612x612&w=0&k=20&c=mhobndfBqqHSq_P_5e-brizNnK1C9rH01Y9bDnnbbsA=' },
    { id: 6, name: 'Nine Arch Bridge', town: 'Ella', image: 'https://media.istockphoto.com/id/822722846/photo/nine-arches-bridge-demodara-in-ella-sri-lanka.jpg?s=612x612&w=0&k=20&c=68BrIXYAXg1v1etgJSSBm4h9G_kADUB8A9_eoyEJMVo=' },
    // Add more destinations as needed
  ];

  const navigate = useNavigate();

  const handleDestinationClick = (destination) => {
    navigate(`/travel/${destination.id}`, { state: { destination } });
  };

  return (
    <>
      <Pageshero bgVideo={DesVideo} title={"Discover The beauty Of Sri Lanka"} message={"Sri Lanka beckons with its enchanting landscapes, from lush tea plantations carpeting rolling hills to pristine beaches kissed by turquoise waters. Embrace the serenity of ancient ruins and vibrant wildlife, making it a captivating haven for all seekers of natural wonders."}/>

      <div className="container mx-auto mt-8 w-full">
        <h1 className="text-4xl font-bold mb-6">Destinations</h1>

        <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {destinations.map((destination) => (
            <Link to='/tPlace'>
            <Selection key={destination.id} figure={destination.image} caption={destination.name} onClick={() => handleDestinationClick(destination)} />
            </Link>
          ))}
          
        </div>
        
      </div>
    </>
  );
};

export default DestinationsPage;
