// import Image from 'next/image';
// import React from 'react';
// import profile from '../public/profile.jpg';

// const Hero = () => {
//   return (
//     <div className='h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-500 to-purple-500 text-white'>
//         <Image 
//             src={profile} 
//             width={300} 
//             height={300} 
//             className='rounded-full shadow-lg' 
//             alt='Jenkins'
//         />
//         <h1 className='text-4xl font-bold mt-4'>Hi, I&apos;m Jenkins Uwagbai</h1>
//         <p className='text-lg mt-2'>Frontend Developer | Tech Enthusiast</p>
//         <div className='mt-6'>
//             <button className='px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg'>View Projects</button>
//             <button className='ml-4 px-6 py-3 border border-white text-white rounded-lg'>Hire Me</button>
//         </div>
//     </div>
//   );
// };

// export default Hero;

import React, { createRef } from 'react'
// import Navbar from './components/Navbar'
// import About from './about/page'
import Image from 'next/image'
import jenkins from '../public/profile.jpg';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa6';
import CircularText from './CircularText';
// import Projects from './project/page';
// import { useInView } from 'framer-motion';
// import { useInView, useViewportScroll } from 'framer-motion';

const HomePage = () => {
  const circle = {
    width: 48,
    height: 65,
    backgroundColor: "transparent",
  }

  // const ref = createRef()
  // const { isInView } = useInView();

  return (
    <div className='py-20 bg-gradient-to-b from-blue-500 to-purple-500'>
      {/* <Navbar /> */}
      <div className='flex flex-col md:flex-row gap-14 my-20 items-center'>
        <div className='flex flex-col relative'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='container w-full md:1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5'
          >
            <h2 className='text-4xl font-intert'>Hello, I&apos;m</h2>
            <h1 className='text-6xl md:text-9xl font-extrabold font-intert'>Jenkins <br /> Uwagbai</h1>
            <h2 className='text-2xl'>Frontend Developer | IT Support</h2>

            <motion.button 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.9 }}
              className='bg-blue-500 py-2 px-8 rounded-2xl'
            >
              Hire Me!
            </motion.button>
          </motion.div>

          {/* <motion.div
            style={circle}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            className='rounded-xl absolute top-96 left-96'
          >
            <Link href='#contact'>
              <div 
              // className='flex flex-col gap-2 justify-center place-items-center'
              >
                <CircularText
                  text="CONTACT*ME*CONTACT*ME"
                  onHover='speedUp'
                  spinDuration={20}
                  className='custom-class'
                />
                <FaArrowDown className='text-xl'/>
              </div>
            </Link>
          </motion.div> */}
        </div>
        

        <div className='w-full md:w-1/2 flex justify-center'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={jenkins}
              alt="Jenkins Uwagbai"
              width={600}
              className='rounded-full'
            />
          </motion.div>
          
          
        </div>
      </div>
      {/* <About />
      <Projects /> */}
    </div>
  )
}

export default HomePage