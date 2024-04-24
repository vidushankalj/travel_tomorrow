
import React, { useEffect } from 'react';
import '../Styles/Hero.css';
import { useState } from 'react';

import bgVideo from '../assets/beachVid.mp4';

const Hero = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState("")

  const fetchData = (value) => {
    fetch("http://localhost:8000/api/destinations")
    .then((response) => response.json())
    .then(json => {
      const results = json.filter((destinations) => {
        return (
          value && 
          destinations && 
          destinations.city && 
          destinations.city.toLowerCase().includes(value))
      })
      setSearchResults(results);
    })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
 
  return (
    <header>
      <video
        src={bgVideo}
        className='w-full h-full object-cover hero-video'
        autoPlay
        loop
        muted
      />
      <div className='overlay'></div>
      <div className='hero-content'>
        <h1>Explore Sri Lanka,</h1>
        <h3>Where every moment is an adventure</h3>
        <form className='hero-form'>
          <input
            type='text'
            placeholder='Search Destinations'
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            className='grow bg-transparent outline-none'
          />
          <button className='w-11'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
        </form>
        {searchResults && searchResults.length > 0 && (
            <div className='search-result'>
              {searchResults.map(destinations => (
                <div className='result-item' key={destinations._id}>
                  <div className='destination-info'>
                    <button className='city'>{destinations.city}</button>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </header>
  );
};

export default Hero;
