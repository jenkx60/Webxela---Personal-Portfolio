"use client"
import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import undraw from '../public/undraw_web-developer.svg';
import SkillWall from './SkillWall';
import { useGSAP } from '../../hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    
    // Animate Section Titles
    gsap.fromTo(".about-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".about-title-container", start: "top 80%" } }
    );

    // Animate Image
    gsap.fromTo(".about-image",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: ".about-content", start: "top 70%" } }
    );

    // Animate Content
    gsap.fromTo(".about-text",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.2, scrollTrigger: { trigger: ".about-content", start: "top 70%" } }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className='py-24 px-2 md:px-6 bg-zinc-950 text-white relative border-t border-white/5 overflow-hidden'>
        
        {/* Title */}
        <div className='about-title-container relative flex justify-center py-10 mb-6 md:mb-10'>
            <h1 className='about-title text-3xl sm:text-4xl md:text-5xl font-bold text-center z-10 relative'>
                About <span className='text-blue-500'>Me</span>
                <span className='block h-1 w-20 md:w-24 bg-blue-500 mt-4 mx-auto rounded-full'></span>
            </h1>
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-9xl font-extrabold text-white/5 whitespace-nowrap pointer-events-none select-none z-0'>
                MY STORY
            </h1>
        </div>
        
        <div className='container mx-auto about-content flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>
            {/* Image */}
            <div className='w-full lg:w-1/2 about-image flex justify-center px-4 sm:px-0'>
                 <div className="relative p-6 md:p-8 bg-zinc-900/50 rounded-2xl border border-white/5 w-full max-w-md lg:max-w-none">
                    <Image
                        src={undraw}
                        alt="Web Developer Illustration"
                        width={500}
                        height={400}
                        className='w-full h-auto drop-shadow-2xl'
                    />
                 </div>
            </div>

            {/* Content */}
            <div className='w-full lg:w-1/2 about-text space-y-6 px-4 sm:px-0'>
                <h3 className='text-xl sm:text-2xl font-semibold text-blue-400'>Who am I?</h3>
                <h2 className='text-3xl sm:text-4xl font-bold leading-tight'>I'm Jenkins Uwagbai, a <span className="text-white">Frontend Architect</span>.</h2>
                <p className='text-zinc-400 text-base sm:text-lg leading-relaxed'>
                    I specialize in building and managing high-performance websites and web applications. My passion lies in creating seamless, user-friendly experiences that drive product success. 
                </p>
                <p className='text-zinc-400 text-lg leading-relaxed'>
                     Beyond coding, I am an active contributor to the developer community, sharing knowledge and insights to help others grow in their tech journey.
                </p>

                <div className='grid grid-cols-1 gap-4 py-6 text-zinc-300'>
                    {/* <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <p className="text-sm sm:text-base"><strong>Top Skill:</strong> React / Next.js</p>
                    </div> */}
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <p className="text-sm sm:text-base"><strong>Email:</strong> jenkinsu@hotmail.com</p>
                    </div>
                     <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <p className="text-sm sm:text-base"><strong>Location:</strong> Lagos, Nigeria (UTC+1)</p>
                    </div>
                     <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <p className="text-sm sm:text-base"><strong>Status:</strong> Available for Hire</p>
                    </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row">
                    <a 
                        href="/Jenkins_Uwagbai_CV.pdf" 
                        download 
                        className='w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20'
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="mt-20 md:mt-32 scroll-mt-24">
             <div className='text-center mb-12 md:mb-16 space-y-4 px-4'>
                <h3 className='text-sm font-bold tracking-widest text-blue-500 uppercase'>My Tech Stack</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tools I use to build magic</h2>
             </div>
             <div className="px-4">
                <SkillWall />
             </div>
        </div>

    </section>
  )
}

export default About;