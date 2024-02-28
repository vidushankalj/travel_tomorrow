import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Selections from '../components/Selections'
import Destinations from '../components/Destinations'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <>
        <Hero/>
        <Destinations/>
        <Search/>
        <Selections/>
        <Carousel/>
    </>
  )
}

export default Home