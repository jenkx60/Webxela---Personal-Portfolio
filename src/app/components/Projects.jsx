"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '../../hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import password from '../public/pass_shots_so.png';
import sunny from '../public/sunny_shots_so.png';
import yayyu from '../public/yayyu_app_shots_so.png';
import order from '../public/order_shots_so.png';
import blog from '../public/blog_shots_so.png';
import social from '../public/links_shots_so.png';
import typing from '../public/typing_shots_so.png';
import portfolio from '../public/portfolio_shots_so.png';
import lexp from '../public/lexp.png';
import mitra from '../public/mitra.png';
import coconut from '../public/coconut.png';
import rally from '../public/rally.png';
import live from '../public/livenow.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: rally,
    title: 'Rally',
    subtitle: 'Collaborative Event Planning Platform',
    description: 'A sophisticated platform designed to turn group chats into real plans. It features a robust multi-step event creation flow, comprehensive attendee management, and real-time payout tracking, all powered by a flexible Mock-Data First architecture.',
    link: 'https://rally-v1.netlify.app/',
    skills: ['Next.js', 'TypeScript', 'Zustand', 'Supabase', 'Lucide React']
  },
  {
    image: live,
    title: 'Football Live Now',
    subtitle: 'Real-time Scores & Fixtures Tracker',
    description: 'A modern, high-performance football application that delivers live scores, match fixtures, and league updates for all major leagues globally. It features a premium UI with timezone-aware scheduling and smooth motion animations.',
    link: 'https://livenow1.netlify.app',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Zustand']
  },
  {
    image: coconut,
    title: 'Coconut',
    subtitle: 'Africa’s Retail Growth Platform',
    description: 'A comprehensive growth platform for African retail brands, offering global shipping, business compliance, multi-currency banking, and premium packaging services.',
    link: 'https://withcoconut.com/',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'TanStack Query', 'Firebase']
  },
  {
    image: mitra,
    title: 'UI Mitra',
    subtitle: 'Design Agency Website',
    description: 'A modern UI/UX design agency website focusing on clean design, smooth animations, and user experience.',
    link: 'http://ui-mitra.netlify.app/',
    skills: ['React', 'Framer Motion', 'Tailwind']
  },
  {
    image: lexp,
    title: 'Lexp AI',
    subtitle: 'Lead Generation Platform',
    description: 'AI-powered platform integrating LinkedIn & Twitter to find and convert high-quality prospects.',
    link: 'https://lexp.webxela.com/',
    skills: ['React', 'TypeScript', 'AI Integration']
  },
  { 
    image: yayyu, 
    title: 'Yayyu Store', 
    subtitle: 'E-commerce Web App',
    description: 'User-friendly e-commerce app with seamless browsing and Shopify integration.', 
    link: 'https://github.com/jenkx60/yayyu_product.git', 
    skills: ['Next.js', 'Shopify', 'Tailwind'] 
  },
  {
    image: typing,
    title: 'Typing Master',
    subtitle: 'Speed Test App',
    description: 'Sleek typing test app with real-time WPM tracking and dynamic word generation.',
    link: 'https://jenkx-typing-test.netlify.app/',
    skills: ['Next.js', 'State Management']
  },
  {
    image: portfolio,
    title: 'Portfolio V1',
    subtitle: 'Personal Website',
    description: 'My previous portfolio showcase featuring a contact form and project gallery.',
    link: 'https://jenkinsuwagbai.webxela.com',
    skills: ['Next.js', 'Supabase']
  },
  { 
    image: password, 
    title: 'SecurePass', 
    subtitle: 'Password Generator',
    description: 'Utility tool for generating secure, strong passwords with customizable criteria.', 
    link: 'https://password-generator-474.netlify.app/', 
    skills: ['JavaScript', 'HTML/CSS'] 
  },
];

const ProjectCard = ({ project, index }) => {
    return (
        <div className="project-card group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60" />
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 p-6 -mt-10">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <p className="text-sm text-zinc-400">{project.subtitle}</p>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-full hover:bg-blue-600 transition-colors text-white">
                        <FaExternalLinkAlt size={14} />
                    </a>
                </div>

                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card, i) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className='py-24 md:py-32 px-2 bg-zinc-950 text-white'>
      <div className='container mx-auto'>
        <div className='mb-12 md:mb-20 space-y-4 max-w-2xl'>
            <h2 className='text-xs sm:text-sm font-bold tracking-widest text-blue-500 uppercase'>Selected Work</h2>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight'>Digital Products & <br className="hidden sm:block" /> Experiments.</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;