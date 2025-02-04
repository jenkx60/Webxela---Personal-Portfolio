// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <section className='py-20'>
//           <h2 className='text-3xl font-bold text-center'>About Me</h2>
//           <div className='flex flex-col gap-4 justify-center place-items-center w-1/2 mx-auto mt-5'>
//             <p className='text-gray-400 text-left'>I&apos;m a Frontend Web Developer building and managing the Frontend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
//             <p className='text-gray-400 text-left'>I also like sharing content related to the stuff that I have learned in Web Development so it can help other people of the Dev Community. Feel free to Connect on LinkedIn and GitHub where I post useful content related to Web Development and Programming</p>
//           </div>
//       </section>
//     </div>
//   )
// }

// export default About

import Link from 'next/link';
import React from 'react';
import * as motion from 'motion/react-client';
// import DownloadCVButton from '../components/DownloadCVButton';
import Image from 'next/image';
import undraw from '../public/undraw_web-developer.svg';
// import ProgressBar from '../components/ProgressBar';
import SkillWall from '../components/SkillWall';

const About = () => {
  return (
    <div className='my-20 px-4 md:px-20'>
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <div className='relative flex justify-center mt-20'>
                <div className='absolute text-center mt-5'>
                    <h1 className='text-2xl md:text-4xl font-intert font-extrabold text-blue-500 pb-4'>ABOUT ME</h1>
                    <hr className=' border-blue-500 border-2 w-24 md:w-58 mx-auto'/>
                </div>
                <div>
                    <h1 className='text-6xl md:text-9xl font-intert font-extrabold opacity-10'>ABOUT ME</h1>
                </div>
            </div>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
        >
            <div className='container my-10 flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 flex justify-center mb-20 md:mb-0'>
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 100 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={undraw}
                            alt="Web Developer"
                            width={500}
                            className='w-3/4 md-w-full'
                        />
                    </motion.div>
                    
                </div>
                <div className='w-full md:w-1/2 mt-10 md:mt-0 px-4 md:px-10'>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        >
                            <h1 className='font-intert font-extrabold text-4xl mb-5'>Hi, I&apos;m Jenkins Uwagbai</h1>
                            <h2 className='font-intert font-bold text-2xl text-blue-500 mb-5'>Frontend Developer</h2>
                            <p className='font-intert font-light text-lg mb-4 leading-6'>I specialize in buildng and managing websites and web applications, creating seamless and user-friendly experiences that drive product success. I also enjoy sharing my web development knowledge to help others in the dev community.</p>

                            <div className='flex flex-col gap-1 mb-5'>
                                <p><strong className='text-lg mr-14'>Phone:</strong>+2349131779025</p>
                                <p><strong className='text-lg mr-16'>Email:</strong>jenkinsu@hotmail.com</p>
                                <p><strong className='text-lg mr-9'>Location:</strong>Lagos, Nigeria</p>
                                <p><strong className='text-lg mr-7'>Freelance:</strong><span className='text-green-500'>Available</span></p>
                            </div>

                            <motion.button 
                                initial={{ scale: 0 }} 
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileTap={{ scale: 1.1 }}
                                whileHover={{ scale: 0.9 }}
                                className='bg-blue-500 py-2 px-8 rounded-2xl'
                            >
                                <a download href="../public/Jenkins_Uwagbai_CV.pdf">Download CV</a>
                            </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
        

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <div className='relative flex flex-col items-center mt-32'>
                <div className='absolute text-center mt-5'>
                    <h1 className='text-2xl md:text-4xl font-intert font-extrabold text-blue-500 pb-4'>SKILLS</h1>
                    <hr className=' border-blue-500 border-2 w-24 md:w-58 mx-auto'/>
                </div>
                <div>
                    <h1 className='text-6xl md:text-9xl font-intert font-extrabold opacity-10'>SKILLS</h1>
                </div>
            </div>
        </motion.div>
        
        <motion.div>
            <div className='container my-10 flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 px-4 md:px-10'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-intert font-bold text-2xl md:text-3xl'><strong>Bringing Ideas to Life with Modern Frontend Development</strong></h1>
                        <p className='font-intert font-light text-lg md:text-xl leading-6'>I'm a skilled Frontend Web Developer specializing in building responsive, user-friendly websites and web applications. With expertise in HTML, CSS, JavaScript, BootStrap, TailwindCSS, Git, GitHub and modern frameworks like React and NextJs.</p> 
                        <p className='font-intert font-light text-lg md:text-xl leading-6'>I craft seamless interfaces that enhance user experience and contribute to product success. My focus is on clean code, performance optimization, and delivering solutions that meet both user and business needs.</p>  
                    </div>
                </div>
                {/* <div className='container'>
                    <ProgressBar />
                </div> */}
            </div>
        </motion.div>

        <motion.div>
            <SkillWall />
        </motion.div>

        
    </div>
  )
}

export default About