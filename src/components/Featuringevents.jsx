// import React from 'react';

// import p1 from '../assets/fortsapphire.jpg';
// import p2 from '../assets/bluebeach.jpg';
// import p3 from '../assets/olddutchhouse.jpg';
// import p4 from '../assets/beachhavenguesthouse.jpg';
// import p5 from '../assets/smilebeachhome.jpg';


// const Destinations = () => {
//   return (
//     <section className='container px-4 flex flex-col items-center my-16'>
//       <h2 className='mb-4'>All-inclusive Resorts</h2>
//       <p className='mb-8 font-bold'>On the Pearl of Indian Ocean</p>
//       <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
//         <div className='col-span-2 md:col-span-3 md:row-span-2'>
//           <img
//             src={p1}
//             alt='place1'
//             className='w-full h-full object-cover'
//           />
//         </div>
//         <div>
//           <img
//             src={p2}
//             alt='place2'
//             className='w-full h-full object-cover'
//           />
//         </div>
//         <div>
//           <img
//             src={p3}
//             alt='place3'
//             className='w-full h-full object-cover'
//           />
//         </div>
//         <div>
//           <img
//             src={p4}
//             alt='place4'
//             className='w-full h-full object-cover'
//           />
//         </div>
//         <div>
//           <img
//             src={p5}
//             alt='place5'
//             className='w-full h-full object-cover'
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Destinations;


// Destinations.js

import React from 'react';

import '../Styles/Destinations.css';

import p1 from '../assets/fortsapphire.jpg';
import p2 from '../assets/bluebeach.jpg';
import p3 from '../assets/olddutchhouse.jpg';
import p4 from '../assets/beachhavenguesthouse.jpg';
import p5 from '../assets/smilebeachhome.jpg';

const Featuringevents = () => {
  return (
    <section className='d-destinations-container'>
      <h2 className='d-destinations-heading'>All-inclusive Resorts</h2>
      <p className='d-destinations-subheading'>On the Pearl of Indian Ocean</p>
      <div className='d-destinations-grid'>
        <div className='d-grid-item d-big-image'>
          <img src={p1} alt='place1' />
        </div>
        <div className='d-grid-item'>
          <img src={p2} alt='place2' />
        </div>
        <div className='d-grid-item'>
          <img src={p3} alt='place3' />
        </div>
        <div className='d-grid-item'>
          <img src={p4} alt='place4' />
        </div>
        <div className='d-grid-item'>
          <img src={p5} alt='place5' />
        </div>
      </div>
    </section>
  );
};

export default Featuringevents;