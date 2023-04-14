import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Interview from './components/Interview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Test from './components/Test';
import Types from './components/Types';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <Types/>
      <GallerySection />
      <Skills />
      <Test/>
      <Interview />
      <Testimonial />
      <Contact />
      <Copyright />


      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
