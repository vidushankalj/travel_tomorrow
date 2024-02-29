import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-8'>
      <div className='container px-4 sm:flex justify-between items-center'>
        <h1 className='px-2'>Travel Tommorow</h1>
        <ul className='flex flex-wrap'>
          <li className='p-0 px-2'>
            <Link to="/">About</Link>
          </li>
          <li className='p-0 px-2'>
            <Link to="/destinations">Email</Link>
          </li>
          <li className='p-0 px-2'>
            <Link to=''>Contact Us</Link>
          </li>
          <li className='p-0 px-2'>
            <Link to=''>Review</Link>
          </li>
          <li className='p-0 px-2'>
            <Link to=''>Book</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
