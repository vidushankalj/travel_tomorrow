import React, { useState } from "react";

import { Link } from "react-router-dom";

import Selection from './Selection';

import fort from '../assets/GalleFort.jpg';
import hikka from '../assets/HikkaduwaBeach.jpg';
import museum from '../assets/GalleNationalMuseum.jpg';
import jungle from '../assets/JungleBeach.jpg';
import dutch from '../assets/OldDutchHospital.jpg';
import thalpe from '../assets/ThalpeBeach.jpg';

const Selections = () => {
  
  
  const [ismobile, setismobile] = useState(false);
  
  

  return (
    <ul >
    <section className='container px-4 grid gap-4  sm:grid-cols-3 sm:grid-rows-2'>
      <Link to="/tPlace" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          >
            <Selection figure={fort} caption='Galle Fort Clock Tower' />
          </li>
        </Link>
        <Link to="/tPlace" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          ><Selection figure={hikka} caption='Hikkaduwa Beach' /></li></Link>
      <Link to="/tPlace" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          ><Selection figure={museum} caption='Galle Natianol Museum' /></li></Link>
      <Link to="/tPlace" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          ><Selection figure={jungle} caption='Jungle Beach' /></li></Link>
      <Link to="/tPlace" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          ><Selection figure={dutch} caption='Old Dutch Hospital' /></li></Link>
      <Link to="/tPlace" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          ><Selection figure={thalpe} caption='Thalpe Beach' /></li></Link>
    </section>
    </ul>
  );
};

export default Selections;
