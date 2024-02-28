import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Selections from '../components/Selections'
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Destinations/>
        <Search/>
        <Selections/>
        <Carousel/>
        <Footer/>
    </>
  )
}

export default Home