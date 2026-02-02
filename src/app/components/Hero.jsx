"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '../../hooks/useGSAP';
import gsap from 'gsap';
import jenkins from '../public/profile.jpg';
import { FaArrowDown } from 'react-icons/fa6';

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial state setup to avoid FOUC
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, imageRef.current, scrollIndicatorRef.current], { opacity: 0, y: 30 });

    tl.to(imageRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=0.8")
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5 // Start after entrance
    });
    
    // Scroll indicator bounce
    gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className='relative min-h-screen flex items-center justify-center bg-zinc-950 text-white overflow-hidden py-20 px-6'>
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className='container mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12'>
        
        {/* Text Content */}
        <div className='flex-1 text-center md:text-left space-y-6'>
             <div ref={subtitleRef} className='inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm'>
                <span className='text-sm font-medium tracking-wide text-gray-300'>FRONTEND ARCHITECT & CREATIVE DEV</span>
             </div>
            
            <div ref={titleRef} className='space-y-4'>
                <h1 className='text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-tight'>
                    Jenkins <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Uwagbai</span>
                </h1>
            </div>

            <div ref={ctaRef} className='flex flex-col md:flex-row gap-4 items-center md:items-start pt-6'>
                <Link href="#projects" className='w-full md:w-auto text-center group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-transform hover:scale-105'>
                    <span className='relative z-10'>View My Work</span>
                    <div className='absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-hover:bg-blue-400 mix-blend-difference' />
                </Link>
                <Link href="#contact" className='w-full md:w-auto text-center px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium'>
                    Get in Touch
                </Link>
            </div>
        </div>

        {/* Hero Image */}
        <div className='flex-1 flex justify-center md:justify-end relative w-full'>
             <div ref={imageRef} className='relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-out'>
                <Image
                  src={jenkins}
                  alt="Jenkins Uwagbai"
                  fill
                  priority
                  className='object-cover rounded-3xl shadow-2xl'
                />
             </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50'>
        <span className='text-xs uppercase tracking-widest'>Scroll</span>
        <FaArrowDown />
      </div>

    </section>
  );
};

export default Hero;