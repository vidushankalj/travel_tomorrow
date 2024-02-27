import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selections from './components/Selections';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import TravelPlacePage from './components/TravelPlacePage';
import DestinationsPage from './components/Destinationspage';
import Hotelspage from './components/Hotelspage';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selections />
      <Carousel />
      <TravelPlacePage/>
      <DestinationsPage/>
      <Hotelspage/>
      <Footer />
    </>
  );
};

export default App;
