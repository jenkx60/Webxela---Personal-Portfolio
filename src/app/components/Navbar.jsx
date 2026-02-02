"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useGSAP } from '../../hooks/useGSAP';
import gsap from 'gsap';

const Navbar = () => {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
             setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useGSAP(() => {
        gsap.fromTo(".nav-item", 
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out", delay: 0.5 }
        );
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className='container mx-auto px-0 flex justify-between items-center'>
                <Link 
                    href="/" 
                    className={`text-2xl font-bold md:flex md:gap-2 text-white relative z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-100'}`}
                >
                    Jenkins <span className='text-blue-500'>Uwagbai</span>
                </Link>

                <button
                    onClick={toggleMobileMenu}
                    className='md:hidden focus:outline-none text-2xl text-white z-50' 
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center space-x-8'>
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <li key={item} className='nav-item'>
                            <Link 
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} 
                                className='text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group'
                            >
                                {item}
                                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Overlay */}
                 <div className={`fixed inset-0 w-full bg-zinc-950 z-[45] md:hidden flex flex-col items-center justify-center space-y-10 transition-transform duration-500 overflow-hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className='flex flex-col items-center space-y-8'>
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <Link 
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='text-4xl font-bold text-white hover:text-blue-500 transition-colors tracking-tight'
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                 </div>
            </div>
        </nav>
    );
};

export default Navbar;