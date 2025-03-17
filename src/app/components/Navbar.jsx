"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <div>
        <nav className='fixed top-0 left-0 w-full bg-white shadow-md p-4 items-center text-black dark:bg-black dark:text-white'>
          <div className='flex justify-between items-center w-full'>
              <h1 className='text-2xl font-bold md:flex md:gap-2'>Jenkins <span className='text-blue-300'>Uwagbai</span></h1>
              <button
                onClick={toggleMobileMenu}
                className='md:hidden focus:outline-none text-2xl' 
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

              <ul className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 md:relative absolute top-full left-0 w-full md:w-auto bg-black md:bg-transparent shadow-md p-4  ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                  <li><Link href="#" className='block py-2 md:py-0 hover:text-blue-500 transition'>Home</Link></li>
                  <li><Link href="#about" className='block py-2 md:py-0 hover:text-blue-500 transition'>About</Link></li>
                  <li><Link href="#skills" className='block py-2 md:py-0 hover:text-blue-500 transition'>Skill</Link></li>
                  <li><Link href="#projects" className='block py-2 md:py-0 hover:text-blue-500 transition'>Projects</Link></li>
                  <li><Link href="#contact" className='block py-2 md:py-0 hover:text-blue-500 transition'>Contact</Link></li>
              </ul>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;