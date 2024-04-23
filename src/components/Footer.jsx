// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
// return (
// <footer className='bg-gray-200 py-8'>
// <div className='container px-4 sm:flex justify-between items-center'>
// <h1 className='px-2'>Travel Tommorow</h1>
// <ul className='flex flex-wrap'>
// <li className='p-0 px-2'>
// <Link to="/">About</Link>
// </li>
// <li className='p-0 px-2'>
// <Link to="/destinations">Email</Link>
// </li>
// <li className='p-0 px-2'>
// <Link to=''>Contact Us</Link>
// </li>
// <li className='p-0 px-2'>
// <Link to=''>Review</Link>
// </li>
// <li className='p-0 px-2'>
// <Link to=''>Book</Link>
// </li>
// </ul>
// </div>
// </footer>
// );
// };

// export default Footer;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import AdvertisementForm from './AdvertisementForm';

const Footer = () => {
  const [showAdForm, setShowAdForm] = useState(false);

  const openAdForm = () => {
    setShowAdForm(prevState => !prevState);
  };

  const closeAdForm = () => {
    setShowAdForm(false);
  };

  return (
    <footer className='ft-bg-gray-200 ft-py-8 ft-footer'>
      <div className='ft-container ft-px-4 ft-sm-flex ft-justify-between ft-items-center'>
        <h1 className='ft-px-2 ft-h1'>Travel Tomorrow</h1>
        <ul className='ft-flex ft-flex-wrap'>
          <li className='ft-p-0 ft-px-2'>
            <Link to="/" className="ft-link">About</Link>
          </li>
          <li className='ft-p-0 ft-px-2'>
            <button className="ft-link" onClick={openAdForm}>Advertise With Us</button>
          </li>
          <li className='ft-p-0 ft-px-2'>
            <Link to='' className="ft-link">Contact Us</Link>
          </li>
          <li className='ft-p-0 ft-px-2'>
            <Link to='' className="ft-link">Review</Link>
          </li>
        </ul>
      </div>
      {showAdForm && (
        <div className="ft-modal">
          <div className="ft-modal-content">
            <button className="ft-modal-close" onClick={closeAdForm}>X</button>
            <AdvertisementForm onClose={closeAdForm} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
