import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary'>
        <li className='nav-link'>
        <Link to='banner' smooth={true} duration={500}>
            Home
          </Link>
          {/* <a href='Banner.js'>Home</a> */}
        </li>
        <li className='nav-link'>
          {/* <a href='Experience.js'>Projects</a> */}
          <Link to='head' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='nav-link'>
          {/* <a href='#!'>About me</a> */}
          <Link to='Me' smooth={true} duration={500}>
            About ME
          </Link>
        </li>
        <li className='btn'>
          {/* <a href='#!'>Colaborate</a> */}
          <Link to='colab' smooth={true} duration={500}>
            Colaborate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
