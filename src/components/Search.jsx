// import React from 'react';

// const Search = () => {
//   return (
//     <section className='container px-4 my-16 grid gap-8 md:grid-cols-3'>
//       <div className='md:col-span-2'>
//         <h3 className='uppercase font-extrabold mb-4'>
//           luxury included vacations for tow people
//         </h3>
//         <p className='mb-10 text-gray-600 text-justify'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda
//           soluta eum, voluptatem dolorem nostrum vitae. Vitae veniam ad, ipsam,
//           itaque consectetur nemo quis quasi libero quam in harum sed aut ex
//           doloremque consequuntur? Sed optio consectetur placeat non tempore.
//           Placeat omnis molestias perferendis magni ipsum eveniet ad esse dicta
//           accusamus pariatur adipisci, culpa soluta veniam repellendus
//           consequuntur cum debitis!
//         </p>
//         <div className='flex flex-col sm:flex-row'>
//           <div className='text-center'>
//             <h4 className='uppercase font-extrabold mb-2'>leading service</h4>
//             <p className='uppercase text-gray-600'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             </p>
//           </div>
//           <div className='text-center'>
//             <h4 className='uppercase font-extrabold mb-2'>automated booking</h4>
//             <p className='uppercase text-gray-600'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className='border px-4 py-4 uppercase text-center'>
//           <p className='py-2'>get an additional 10% off</p>
//           <p className='py-2'>12 hours left</p>
//           <p className='py-2 text-white bg-black cursor-pointer'>
//             book now and save
//           </p>
//         </div>
//         <form action=''>
//           <div className='my-4'>
//             <label htmlFor='destination'>Destination</label>
//             <select
//               name='destinations'
//               id='destination'
//               className='block w-full p-2 border rounded'
//             >
//               <option value='dog'>Fort Sapphire</option>
//               <option value='cat'>Blue Beach</option>
//               <option value='hamster'>Old Dutch House</option>
//               <option value='parrot'>Beach Heavan Guest House</option>
//               <option value='spider'>Smile Beach Home</option>
//             </select>
//           </div>
//           <div className='my-4'>
//             <label htmlFor='checkIn'>Check-In</label>
//             <input
//               type='date'
//               id='checkIn'
//               name='checkIn'
//               className='block w-full p-2 border rounded'
//             ></input>
//           </div>
//           <div className='my-4'>
//             <label htmlFor='checkOut'>Check-Out</label>
//             <input
//               type='date'
//               id='checkOut'
//               name='checkOut'
//               className='block w-full p-2 border rounded'
//             ></input>
//           </div>
//           <button className='btn'>Rates & Availabilities</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Search;

// Search.js

import React from 'react';
import '../Styles/Search.css';

const Search = () => {
  return (
    <section className='ser-container ser-px-4 ser-my-16 ser-grid ser-gap-8 md:grid-cols-3'>
      <div className='md:col-span-2'>
        <h3 className='ser-uppercase ser-font-extrabold ser-mb-4'>
          Place Your Reservation From Here
        </h3>
        <p className='ser-mb-10 ser-text-gray-600 ser-text-justify'>
        Embark on your next adventure with ease through our innovative trip planning website. Discover captivating destinations around the country and seamlessly book accommodations tailored to your preferences. From cozy boutique hotels to luxurious resorts, our platform provides comprehensive information and real-time availability, ensuring that your journey is as effortless as it is exhilarating. Start planning your perfect getaway today and unlock a world of unforgettable experiences with just a few clicks.
        </p>
        <div className='ser-flex ser-flex-col ser-sm:flex-row'>
          <div className='ser-text-center'>
            <h4 className='ser-uppercase ser-font-extrabold ser-mb-2'>leading service</h4>
            <p className='ser-uppercase ser-text-gray-600'>
              You can check availability of hotels and guest houses through this website.
            </p>
          </div>
          <div className='ser-text-center'>
            <h4 className='ser-uppercase ser-font-extrabold ser-mb-2'>automated booking</h4>
            <p className='ser-uppercase ser-text-gray-600'>
              Fill this Form and check your availability....
            </p>
          </div>
        </div>
      </div>
      <div className='form-container'>
        <div className='ser-border ser-px-4 ser-py-4 ser-uppercase ser-text-center'>
          <p className='ser-py-2'>get an additional 10% off</p>
          <p className='ser-py-2'>12 hours left</p>
          <p className='ser-py-2 ser-text-white ser-bg-black ser-cursor-pointer'>
            book now and save
          </p>
        </div>
        <form action='' className='form-container' >
          <div className='ser-my-4'>
            <label htmlFor='destination'>Destination</label>
            <select
              name='destinations'
              id='destination'
              className='ser-block ser-w-full ser-p-2 ser-border ser-rounded'
            >
              <option value='dog'>Gall</option>
              <option value='cat'>Kandy</option>
              <option value='hamster'>Anuradhapura</option>
              <option value='parrot'>Colombo</option>
              <option value='spider'>Jaffna</option>
            </select>
          </div>
          <div className='ser-my-4'>
            <label htmlFor='destination'>Hotel</label>
            <select
              name='destinations'
              id='destination'
              className='ser-block ser-w-full ser-p-2 ser-border ser-rounded'
            >
              <option value='dog'>Mount Blue Kandy</option>
              <option value='cat'>Tamarind Hill</option>
              <option value='hamster'>The Lvy Lake</option>
              <option value='parrot'>Hotel J Negambo</option>
              <option value='spider'>Marino Beach Colombo</option>
              <option value='spider'>Jetwing Jaffna</option>
            </select>
          </div>
          <div className='ser-my-4'>
            <label htmlFor='checkIn'>Check-In</label>
            <input
              type='date'
              id='checkIn'
              name='checkIn'
              className='ser-block ser-w-full ser-p-2 ser-border ser-rounded'
            ></input>
          </div>
          <div className='ser-my-4'>
            <label htmlFor='checkOut'>Check-Out</label>
            <input
              type='date'
              id='checkOut'
              name='checkOut'
              className='ser-block ser-w-full ser-p-2 ser-border ser-rounded'
            ></input>
          </div>
          <button className='ser-btn'>Rates & Availabilities</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
