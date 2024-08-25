import React from 'react';

const Hero = () => {
  return (
    <section className='bg-yellow-400 text-white text-center p-10 shadow-2xl'>
      <div className='content max-w-4xl mx-auto'>
        <div className='title space-y-2 mb-5'>
          <h1 className='text-5xl font-bold font-sans '>LET'S</h1>
          <h1 className='text-5xl font-bold font-sans '>GET</h1>
          <h1 className='text-5xl font-bold font-sans'>MOVING</h1>
        </div>
        <div className='sub-title'>
          <p className='text-xl'>Your journey to fitness starts here</p>
          <p className='text-xl'>Unleash your potential</p>
        </div>
      </div>
    </section>
  )
}

export default Hero;
