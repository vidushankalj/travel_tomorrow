import React from 'react';
import { useNavigate } from 'react-router-dom';
import Selection from '../components/Selection';
import DesVideo from '../assets/Des_Video.mp4';
import Pageshero from '../components/Pageshero';

const SerchResultPage = () => {
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

  const hotels = [
    { id: 1, name: 'Mount Blue Kandy', town: 'Kandy', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1e/ca/e5/mount-blue-kandy.jpg?w=700&h=-1&s=1' },
    { id: 2, name: 'Tamarind Hill', town: 'Galle', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5d/85/3f/courtyard.jpg?w=700&h=-1&s=1' },
    { id: 3, name: 'The Lvy Lake', town: 'Anuradhapura', image: 'https://lh3.googleusercontent.com/p/AF1QipMsc4JwtxpsmGf-dP0NpYgMd9ZfH60uKyU8-fnM=w287-h192-n-k-rw-no-v1' },
    { id: 4, name: 'Hotel J Negambo', town: 'Negambo', image: 'https://lh5.googleusercontent.com/proxy/1-lotMjKjCCBEU08b87_4grkGY2JHxcBesmZ46us-bxcvI7nan1jyn0G8KC7dd5cLPRSoGlhqSR8nGDLJF2PSfOM7F451SZtf3Xk08naRFSYPdcuqFKJMRll_f8s0HgTb0OJymSImsBxu0hdwXLGGUoVoNYZpw=w253-h168-k-no' },
    { id: 5, name: 'Marino Beach Colombo', town: 'Colombo', image: 'https://pix10.agoda.net/hotelImages/37200934/0/10d24666c77f9de4d3e382291a87175e.jpg?ce=0&s=414x232' },
    { id: 6, name: 'Jetwing Jaffna', town: 'Jaffna', image: 'https://lh5.googleusercontent.com/p/AF1QipPdunrH9F0tHALY2H-4kVuhZ9oN6An-rx8Mu4md=w253-h379-k-no' },
    // Add more destinations as needed
  ];

  const events = [
    { id: 1, name: 'Sahana Mudic Concert', town: 'Kandy', image: 'https://www.newswire.lk/wp-content/uploads/2022/09/Sahan.jpg' },
    { id: 2, name: 'Legends Concert', town: 'Colombo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcbJY_fDW43ykWLQ-tooN7trHimDeudsonCIk9KU8TA&s' },
    { id: 3, name: 'Cascading Melodies', town: 'Gall', image: 'https://cplusband.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-07-at-6.25.41-PM-2.jpeg' },
    { id: 4, name: 'Srilankan Food Fest', town: 'Anuradhapura', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0a9cc46945681.5607ec2820521.jpg' },
    { id: 5, name: 'Ginisisila', town: 'Negambo', image: 'https://i.pinimg.com/originals/dd/76/de/dd76de85e976ee55883bd04747447c08.gif' },
    { id: 6, name: 'Kandy Esala Perahera', town: 'Kandy', image: 'https://miro.medium.com/v2/resize:fit:1400/1*iN7Y5gcmbinOso0tvg240g.jpeg' },
    // Add more destinations as needed
  ];

  const navigate = useNavigate();

  const handleDestinationClick = (destination) => {
    navigate(`/travel/${destination.id}`, { state: { destination } });
  };

  return (
    <>
      <Pageshero bgVideo={DesVideo} title={"Serch Result for Colombo....."} message={""}/>

      <div className="container mx-auto mt-8 w-full">
        <h1 className="text-4xl font-bold mb-6">Destinations</h1>

        <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {destinations.map((destination) => (
            <Selection key={destination.id} figure={destination.image} caption={destination.name} onClick={() => handleDestinationClick(destination)} />
          ))}
        </div>
      </div>


      <div className="container mx-auto mt-8 w-full">

      <h1 className="text-4xl font-bold mb-6">Hotels & Resturants</h1>

      <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
        {hotels.map((hotels) => (
            <Selection figure={hotels.image} caption={hotels.name}/>
        ))}
      </div>
    </div>


    <div className="container mx-auto mt-8 w-full">

<h1 className="text-4xl font-bold mb-6">Events</h1>

<div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
  {events.map((events) => (
      <Selection figure={events.image} caption={events.name}/>
  ))}
</div>
</div>

    </>
  );
};

export default SerchResultPage;