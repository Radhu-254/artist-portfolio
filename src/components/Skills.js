import React, { useEffect, useState } from 'react';
//  useInView hook
import { useInView } from 'react-intersection-observer';
// react circular
import { CircularProgressbar } from 'react-circular-progressbar';
// react circular styles
import 'react-circular-progressbar/dist/styles.css';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (a < 95) {
          setA(a + 1);
        }
        if (b< 69) {
          setB(b + 1);
        }
        if (c < 82) {
          setC(c + 1);
        }
        if (d < 87) {
          setD(d + 1);
        }
      }, 50);
    } else {
      setA(0);
      setB(0);
      setC(0);
      setD(0);
    }
  }, [inView,a,b,c,d]);
 
  return (
    <motion.section
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className='section font-primary'
      id="skills"
    >
      <div className='container mx-auto'>
      <div className='container mx-auto'>
        <h2 className='h2 max-w-[370px] lg:mb-20 mt-12'>
          Artist's Work :
        </h2>
      </div>
        <div className='flex flex-col lg:flex-row md:flex-row justify-between items-center lg:gap-x-6 gap-y-6 text-sky-600'>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}

              value={a}
              text={`${a}`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Oil on canvas
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={b}
              text={`${b}`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Oil on board
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={c}
              text={`${c}`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              goauche on paper
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={d}
              text={`${d}`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Oil and Pigment on board
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
