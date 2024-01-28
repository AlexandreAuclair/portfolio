import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main>
      <Navbar/>
      <div className='wrapper'>
        <Hero />
      </div>
    </main>
  )
}

export default Home