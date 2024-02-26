import React from 'react';

import Selection from './Selection';

import fort from '../assets/GalleFort.jpg';
import hikka from '../assets/HikkaduwaBeach.jpg';
import museum from '../assets/GalleNationalMuseum.jpg';
import jungle from '../assets/JungleBeach.jpg';
import dutch from '../assets/OldDutchHospital.jpg';
import thalpe from '../assets/ThalpeBeach.jpg';

const Selections = () => {
  return (
    <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
      <Selection figure={fort} caption='Galle Fort Clock Tower' />
      <Selection figure={hikka} caption='Hikkaduwa Beach' />
      <Selection figure={museum} caption='Galle Natianol Museum' />
      <Selection figure={jungle} caption='Jungle Beach' />
      <Selection figure={dutch} caption='Old Dutch Hospital' />
      <Selection figure={thalpe} caption='Thalpe Beach' />
    </section>
  );
};

export default Selections;
