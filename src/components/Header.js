import React, { useState, useEffect } from 'react';
// import header data
import { headerData } from '../data';
// import components
import Nav from './Nav';
import NavMobile from './NavMobile';
// import icons
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'
      }  bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* logo */}
        <a href='/'>
          <img className='w-[188px] h-[90px] ml-2' src={logo} alt='' />
        </a>
        {/* nav - initially is hidden - show on desktop*/}
        <div className='hidden lg:flex xl:flex'>
          <Nav />
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden absolute right-[5%] bg-white p-2 cursor-pointer'
        >
          <TiThMenuOutline className='text-3xl text-black' />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
