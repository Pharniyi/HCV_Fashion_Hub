import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import Hero from '../src/components/Hero/Hero'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'


const App = () => {
  return (
    <div className='p-0 m-0'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App