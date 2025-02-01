import Image from 'next/image';
import React from 'react';
import profile from '../public/profile.jpg';

const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-500 to-purple-500 text-white'>
        <Image 
            src={profile} 
            width={300} 
            height={300} 
            className='rounded-full shadow-lg' 
            alt='Jenkins'
        />
        <h1 className='text-4xl font-bold mt-4'>Hi, I&apos;m Jenkins Uwagbai</h1>
        <p className='text-lg mt-2'>Frontend Developer | Tech Enthusiast</p>
        <div className='mt-6'>
            <button className='px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg'>View Projects</button>
            <button className='ml-4 px-6 py-3 border border-white text-white rounded-lg'>Hire Me</button>
        </div>
    </div>
  );
};

export default Hero;