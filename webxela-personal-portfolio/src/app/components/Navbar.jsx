import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
        <nav className='fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex justify-between items-center text-black dark:bg-black dark:text-white'>
            <h1 className='text-2xl font-bold'>Jenkins Uwagbai</h1>
            <ul className='flex space-x-6'>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#project">Projects</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;