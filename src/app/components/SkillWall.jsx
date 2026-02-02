"use client"
import React, { useRef } from 'react';
import html from '../public/html-icon.svg';
import css from '../public/css-icon.svg';
import javascript from '../public/javascript-programming-language-icon.svg';
import react from '../public/react-js-icon.svg';
import next from '../public/nextjs-icon.svg';
import git from '../public/git-icon.svg';
import github from '../public/github-icon.svg';
import bootstrap from '../public/bootstrap-5-logo-icon.svg';
import tailwind from '../public/tailwind-css-icon.svg';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '../../hooks/useGSAP';

const SkillWall = () => {
    const containerRef = useRef(null);
    const skillImg = [
        { imgUrl: html, altText: 'HTML'},
        { imgUrl: css, altText: 'CSS'},
        { imgUrl: javascript, altText: 'JavaScript'},
        { imgUrl: react, altText: 'React'},
        { imgUrl: next, altText: 'Next.js'},
        { imgUrl: git, altText: 'Git'},
        { imgUrl: github, altText: 'GitHub'},
        { imgUrl: bootstrap, altText: 'Bootstrap'},
        { imgUrl: tailwind, altText: 'Tailwind'},
    ];

    useGSAP(() => {
        gsap.fromTo(".skill-item", 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.7)", scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%"
            }}
        );
    }, { scope: containerRef });

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

  return (
    <div ref={containerRef} className='flex flex-wrap justify-center gap-4 sm:gap-6 pb-20 max-w-4xl mx-auto'>
        {skillImg.map((item, index) => (
            <div 
                key={index} 
                className='skill-item w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-lg border border-zinc-800'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'>
                    <Image
                        src={item.imgUrl}
                        alt={item.altText}
                        fill
                        className='object-contain' 
                    />
                </div>
            </div>
        ))}
    </div>
  )
}

export default SkillWall;