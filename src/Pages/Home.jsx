import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Selections from '../components/Selections'
import Carousel from '../components/Carousel'
import Featuringevents from '../components/Featuringevents'


function Home() {
  return (
    <>
        <Hero/>
        <Search/>
        <Selections/>
        <Carousel/>
    </>
  )
}

export default Home