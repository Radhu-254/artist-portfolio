import React from 'react';
// import contact data
import { contactData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';


const Contact = () => {
  // destructure contact data
  const { title, info, form } = contactData;
  return (
    <section className='section mt-12' id="contact">
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-12'>
           {/* title */}
           <h2 className='h2 max-w-[490px]'>{title}</h2>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 flex-row'
          >
            {/* info items */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {info.map((item, index) => {
                // destructure item
                const { title, subtitle, address, phone, email} = item;
                return (
                  // item
                  <div key={index}>
                    {/* title */}
                    <div className='font-primary uppercase font-medium text-xl mb-3'>
                      {title}
                    </div>
                    {/* subtitle */}
                    <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
                      {subtitle}
                    </div>
                    {/* address, phone & email */}
                    <div className='flex flex-col gap-y-3 mb-8'>
                      {/* address */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{address.icon}</div>
                        <div className='font-medium'>{address.name}</div>
                      </div>
                      {/* phone */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{phone.icon}</div>
                        <div className='font-medium'>{phone.number}</div>
                      </div>
                      {/* email */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{email.icon}</div>
                        <div className='font-medium'>{email.address}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* form */}
          <motion.h2 className='h2 max-w-[490px]' variants={fadeIn('left')}>Contact George:</motion.h2>
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 xl:pl-[40px] flex justify-center items-center '
          >

            <form action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4 " method="POST" className='flex flex-col gap-y-10 w-full'>
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='text'
                placeholder={form.name}
                name="name"
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='text'
                placeholder={form.email}
                name="email"
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]'
                type='text'
                placeholder={form.message}
                name="message"
              />
              <button className='self-start btn btn-sm btn-dark'>
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
