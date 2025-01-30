import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
      <footer className='w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10'>
          <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>

            {/* Left Section - Branding */}
            <div className='text-center md:text-left'>
              <h2 className='text-2xl font-bold'>Jenkins <span className='text-blue-300'>Uwagbai</span></h2>
              <p className='text-sm'>Frontend Developer | Tech Enthusiast</p>
            </div>

            {/* Center Section - Navigation */}
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link href='/' className='hover:text-blue-500 transition'>Home</Link>
              <Link href='/about' className='hover:text-blue-500 transition'>About</Link>
              <Link href='/projects' className='hover:text-blue-500 transition'>Projects</Link>
              <Link href='/contact' className='hover:text-blue-500 transition'>Contact</Link>
            </div>

            {/* Right Section - Social Media */}
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <Link href='https://github.com/jenkx60' className='hover:text-blue-500 transition'> <FaGithub className='text-2xl'/></Link>
              <Link href='https://twitter.com' className='hover:text-blue-500 transition'> <FaTwitter className='text-2xl'/></Link>
              <Link href='https://linkedin.com' className='hover:text-blue-500 transition'> <FaLinkedin className='text-2xl'/></Link>
              <Link href='mailto:jenkinsu@hotmail.com' className='hover:text-blue-500 transition'> <MdEmail className='text-2xl'/></Link>
            </div>
          </div>

          {/* Coypright */}
          <div className='text-center text-sm mt-4 border-t border-gray-300 dark:border-gray-700 pt-4'>
            &copy; {new Date().getFullYear()} Jenkins Uwagbai. All Rights Reserved.
          </div>
      </footer>
    </div>
  );
};

export default Footer