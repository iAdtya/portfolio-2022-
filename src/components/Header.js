import React from 'react';
import { Link } from 'react-scroll';

// import components
// import Logo from '../assets/img/logo.svg';
import sig1 from '../assets/img/signature (3).png';
import Nav from './Nav';

// import icons
import { HiMenu } from 'react-icons/hi';

const Header = ({ setNavMobile }) => {
  return (
    <header
      className='py-6'
      data-aos='fade-down'
      data-aos-duration='2000'
      data-aos-delay='900'
    >
      <div name="red" className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <Link to='red' smooth={true} duration={500}>
          <img className='h-[80px]' src={sig1} alt='/' />
          </Link>
            {/* <img className='h-[80px]' src={sig1} alt='/' /> */}
          
          {/* nav */}
          <Nav />
          {/* nav mobile btn */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className='lg:hidden text-3xl text-white cursor-pointer'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
