// import React, { useState } from 'react';
// import logo from '../../ss/Logo2 bt.png'
// import LoginSignup from './LoginSignup';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [navIsShown, setnavIsShown] = useState(false);
//   const toggleNavIsShown = () => {
//     setnavIsShown((navIsShown) => !navIsShown);
//   }; function updatelogingState(){
//     setShowSignUp(!showSignUp)
//   }
//   const [showSignUp,setShowSignUp] = useState(false)
//   return (
//     <nav className='flex justify-between items-center h-20 px-4 absolute top-0 left-0 z-10 w-full text-black bg-stone-50 backdrop-blur-md tracking-widest' >
//     <img src={logo} id='logo' className='logo'></img>
//       <ul className='hidden md:flex '>
//         <li>
//           <Link to="/" className='text-base font-semibold'>Home</Link>
//         </li>
//         <li>
//           <Link to="/destinations" className='text-base font-semibold'>Destinations</Link>
//         </li>
//         <li>
//           <Link to="/hotels" className='text-base font-semibold'>Hotels</Link>
//         </li>
//         <li>
//           <Link to="/travel" className='text-base font-semibold'>Views</Link>
//         </li>
//       </ul>
//       <div className='hidden md:flex'>
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           strokeWidth={1.5}
//           stroke='currentColor'
//           className='w-6 h-6 cursor-pointer'
//           onClick={updatelogingState}
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
//           />
//         </svg>
//       </div>
//       {!navIsShown && (
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           strokeWidth={1.5}
//           stroke='currentColor'
//           className='w-6 h-6 md:hidden'
//           onClick={toggleNavIsShown}
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
//           />
//         </svg>
//       )}
//       {navIsShown && (
//         <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
//           <div className='flex justify-between'>
//             <h1>Beaches.</h1>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='w-6 h-6'
//               onClick={toggleNavIsShown}
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M6 18L18 6M6 6l12 12'
//               />
//             </svg>
//           </div>
//           <ul className=' mb-4'>
//             <li className='border-b-2 border-b-gray-600'>
//               <a href=''>Home</a>
//             </li>
//             <li className='border-b-2 border-b-gray-600'>
//               <a href=''>Destinations</a>
//             </li>
//             <li className='border-b-2 border-b-gray-600'>
//               <a href=''>Travel</a>
//             </li>
//             <li className='border-b-2 border-b-gray-600'>
//               <a href=''>Views</a>
//             </li>
//             <li className='border-b-2 border-b-gray-600'>
//               <a href=''>Book</a>
//             </li>
//           </ul>
//         </div>
//       )}
//       {showSignUp ?<LoginSignup setShowSignUp={updatelogingState}/>:<></>}
      
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.js

// Navbar.js

// Navbar.js

import React, { useState } from 'react';
import logo from '../../ss/Logo2 bt.png';
import LoginSignup from './LoginSignup';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [navIsShown, setNavIsShown] = useState(false);

  const toggleNavIsShown = () => {
    setNavIsShown((navIsShown) => !navIsShown);
  };

  function updateLoginState() {
    setShowSignUp(!showSignUp);
  }

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} id='nav-logo' className='nav-logo'></img>
      <ul className='nav-hidden nav-md:flex nav-menu-links'>
        <li>
          <Link to="/" className='nav-text-base nav-font-semibold'>
            Home
          </Link>
        </li>
        <li>
          <Link to="/destinations" className='nav-text-base nav-font-semibold'>
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/hotels" className='nav-text-base nav-font-semibold'>
            Hotels
          </Link>
        </li>
        <li>
          <Link to="/travel" className='nav-text-base nav-font-semibold'>
            Views
          </Link>
        </li>
      </ul>
      <div className='nav-md:flex mobile-icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='nav-w-6 nav-h-6 nav-cursor-pointer'
          onClick={updateLoginState}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
          />
        </svg>
      </div>
      {!navIsShown && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='nav-w-6 nav-h-6 mobile-icon'
          onClick={toggleNavIsShown}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
          />
        </svg>
      )}
      {navIsShown && (
        <div className='nav-absolute nav-z-10 nav-top-0 nav-left-0 nav-w-full nav-bg-gray-100/90 nav-text-black nav-px-4 nav-py-6'>
          <div className='nav-flex nav-justify-between'>
            <h1>Beaches.</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='nav-w-6 nav-h-6 mobile-icon'
              onClick={toggleNavIsShown}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <ul className='nav-mb-4'>
            <li className='nav-border-b-2 nav-border-b-gray-600'>
              <a href=''>Home</a>
            </li>
            <li className='nav-border-b-2 nav-border-b-gray-600'>
              <a href=''>Destinations</a>
            </li>
            <li className='nav-border-b-2 nav-border-b-gray-600'>
              <a href=''>Travel</a>
            </li>
            <li className='nav-border-b-2 nav-border-b-gray-600'>
              <a href=''>Events</a>
            </li>
            <li className='nav-border-b-2 nav-border-b-gray-600'>
              <a href=''>Book</a>
            </li>
          </ul>
        </div>
      )}
      {showSignUp ? <LoginSignup setShowSignUp={updateLoginState} /> : <></>}
    </nav>
  );
};

export default Navbar;
