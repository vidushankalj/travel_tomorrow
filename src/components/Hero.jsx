// import React from 'react';

// import bgVideo from '../assets/beachVid.mp4';

// const Hero = () => {
//   return (
//     <header className='w-screen h-screen relative'>
//       <video
//         src={bgVideo}
//         className='w-full h-full object-cover'
//         autoPlay
//         loop
//         muted
//       />
//       <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
//       <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
//         <h1 className='text-white mb-2'>Explore Sri lanka,</h1>
//         <h3 className='text-white mb-4'>Where every moment is an adventure</h3>
//         <form
//           action=''
//           className='flex border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto'
//         >
//           <input
//             type='text'
//             placeholder='Search Destinations'
//             className='grow bg-transparent outline-none'
//           />
//           <button className='w-11 btn--form'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='w-6 h-6'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
//               />
//             </svg>
//           </button>
//         </form>
//       </div>
//     </header>
//   );
// };

// export default Hero;

import React, { useEffect } from 'react';
import '../Styles/Hero.css';
import { useState } from 'react';
import axios from 'axios';

import bgVideo from '../assets/beachVid.mp4';

const Hero = () => {
  const [searchResult, setSearchResult] = useState([])
  const [key, setKey] = useState("")

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()){
          setSearchResult([])
          return
        }
        const res = await axios.get("http://localhost:8000/api/destinations", {params: {key: key, limit: 5}})
        setSearchResult(res.data)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    search()
  }, [key])
 
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
            value={key}
            onChange={(e) => setKey(e.target.value)}
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
        {searchResult && searchResult.length > 0 && (
            <div className='search-result'>
              {searchResult.map(destinations => (
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
