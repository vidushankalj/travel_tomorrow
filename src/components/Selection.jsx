// import React from 'react';

// const Selection = ({ figure, caption }) => {
//   return (
//     <figure className='relative transition ease-in-out overflow-hidden border rounded-md h-60 hover:scale-105 duration-300 ...'>
//       <img src={figure} alt={caption} className='w-full h-full object-cover' />
//       <figcaption className='absolute z-10 bottom-2 left-2 text-white text-2xl font-bold'>
//         {caption}
//       </figcaption>
//       <div className='absolute top-0 left-0 w-full h-full bg-black/30'></div>
//     </figure>
//   );
// };

// export default Selection;

// Tile.js

import React from 'react';
import '../Styles/Tile.css';

const Selection = ({ figure, caption }) => {
  return (
    <figure className='t-selection'>
      <img src={figure} alt={caption} className='t-image' />
      <figcaption className='t-caption'>
        {caption}
      </figcaption>
      <div className='t-overlay'></div>
    </figure>
  );
};

export default Selection;

