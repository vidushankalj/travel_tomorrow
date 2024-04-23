import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TravelPlacePage = () => {
  // Placeholder data
  const placeName = "Example Place";
  const images = [
    "https://placekitten.com/800/400",
    "https://placekitten.com/801/400",
    "https://placekitten.com/802/400",
    // Add more image URLs as needed
  ];
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus orci eget quam ultrices aliquet. Sed euismod nulla at sapien dignissim, a faucibus tellus facilisis. Phasellus auctor erat id dui dapibus luctus. In hac habitasse platea dictumst.";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.116961562762!2d<LONGITUDE>!3d<LATITUDE>!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQwJzIwLjMiTiA2McKwMTAnMjUuNSJF!5e0!3m2!1sen!2sus!4v1648627552401!5m2!1sen!2sus";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-4">{placeName}</h1>

      <div className="relative">
        <button onClick={handlePrevClick} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &lt;
        </button>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="w-full h-64 object-cover rounded-md" />
        <button onClick={handleNextClick} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &gt;
        </button>
      </div>

      <p className="mt-4">{description}</p>

      <div className="mt-8">
        <iframe
          title="Map"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={mapUrl}
        />
      </div>
    </div>
  );
};

export default TravelPlacePage;
