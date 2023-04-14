import React from 'react';
// import data
import { heroData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] h-[400px] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]' id="home">
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'show'}
        className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'
      >
        {/* text & btn */}
        <div className='text-white text-center lg:text-left lg:max-w-[640px] mt-14'>
          <motion.h1 variants={fadeIn('down')} className='h1'>
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn('down')}
            className='mb-8 lg:mb-16 max-w-lg leading-relaxed text-xl'
          ><b>
            {subtitle} </b>
          </motion.p>
          {/* btn */}
          <motion.div variants={fadeIn('down')}>

          <a href="#story">
            <button className='btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0 text-white'>
              {btnText}
              <div className='text-xl'>{btnIcon}</div>
            </button>
          </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
