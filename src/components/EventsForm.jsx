import React, { useState } from 'react';
import Selection from '../components/Selection';
import HotelVideo from '../assets/EventBG.mp4';
import Pageshero from '../components/Pageshero';
import EventsForm from '../components/EventsForm';

const destinations = [
  { id: 1, name: 'Sahana Mudic Concert', image: 'https://www.newswire.lk/wp-content/uploads/2022/09/Sahan.jpg' },
  { id: 2, name: 'Legends Concert', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcbJY_fDW43ykWLQ-tooN7trHimDeudsonCIk9KU8TA&s' },
  { id: 3, name: 'Cascading Melodies', image: 'https://cplusband.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-07-at-6.25.41-PM-2.jpeg' },
  { id: 4, name: 'Srilankan Food Fest', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0a9cc46945681.5607ec2820521.jpg' },
  { id: 5, name: 'Ginisisila', image: 'https://i.pinimg.com/originals/dd/76/de/dd76de85e976ee55883bd04747447c08.gif' },
  { id: 6, name: 'Kandy Esala Perahera', image: 'https://miro.medium.com/v2/resize:fit:1400/1*iN7Y5gcmbinOso0tvg240g.jpeg' },
  // Add more destinations as needed
];

function Eventpage() {
  const [showEventsForm, setShowEventsForm] = useState(false);

  const toggleEventsForm = () => {
    setShowEventsForm(!showEventsForm);
  };

  return (
    <>
      <Pageshero
        bgVideo={HotelVideo}
        title={"Celebrating Cultural Heritage: Special Events in Srilanka"}
        message={"Explore the essence of Sri Lanka through its lively special events. From age-old festivals to modern showcases, there's something for everyone. Dive into the music, taste the flavors, and embrace the traditions that make our country unique. Come celebrate with us and experience the true spirit of Sri Lanka."}
      />

      <div className="container mx-auto mt-8 w-full">
        <h1 className="text-4xl font-bold mb-6">Events</h1>

        <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {destinations.map((destination) => (
            <Selection key={destination.id} figure={destination.image} caption={destination.name} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
          <button onClick={toggleEventsForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {showEventsForm ? "Close Form" : "Add Event"}
          </button>
        </div>

        {showEventsForm && <EventsForm />}
    </>
  );
}

export default Eventpage;
