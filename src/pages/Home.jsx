import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </div>
    </div>
  )
}

export default Home