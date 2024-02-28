import React, { useState } from 'react';
import img1 from '../assets/galle1.jpg';
import img2 from '../assets/galle2.jpg';
import img3 from '../assets/galle3.jpg';
import img4 from '../assets/galle4.jpeg';
import img5 from '../assets/galle5.jpg';
import img6 from '../assets/galle6.jpg';

const CAROUSEL_DATA = [
  { id: "0", url: img1 },
  { id: "1", url: img2 },
  { id: "2", url: img3 },
  { id: "3", url: img4 },
  { id: "4", url: img5 },
  { id: "5", url: img6 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentIndex((currentIndex + 1) % CAROUSEL_DATA.length);
  };

  const decrementIndex = () => {
    setCurrentIndex(currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1);
  };

  return (
    <section className='container px-4 my-12 relative'>
      
      <img src={CAROUSEL_DATA[currentIndex].url} alt='carousel-img' className='rounded-md carousel-image' />
      <div
        onClick={decrementIndex}
        className='absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer  '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        </svg>
      </div>

      <div
        onClick={incrementIndex}
        className='absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
      </div>
    </section>
  );
};

export default Carousel;


