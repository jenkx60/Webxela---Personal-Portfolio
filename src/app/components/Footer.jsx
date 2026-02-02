import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='w-full bg-zinc-950 border-t border-white/5 pt-20 pb-10 text-zinc-400'>
        <div className='container mx-auto px-0'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-12'>
                
                {/* Brand */}
                <div className='text-center md:text-left'>
                    <h2 className='text-3xl font-bold text-white mb-2'>Jenkins <span className='text-blue-500'>Uwagbai</span></h2>
                    <p className='text-sm tracking-wide uppercase'>Frontend Architect & Creative Dev</p>
                </div>

                {/* Socials */}
                <div className='flex space-x-6'>
                    <Link href='https://github.com/jenkx60' target="_blank" className='p-3 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1'> <FaGithub size={20}/></Link>
                    <Link href='https://x.com/iamjenkinsb?s=21' target="_blank" className='p-3 bg-zinc-900 rounded-full hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1'> <FaTwitter size={20}/></Link>
                    <Link href='https://www.linkedin.com/in/jenkins-uwagbai/' target="_blank" className='p-3 bg-zinc-900 rounded-full hover:bg-blue-700 hover:text-white transition-all transform hover:-translate-y-1'> <FaLinkedin size={20}/></Link>
                    <Link href='https://wa.me/2349131779025' target="_blank" className='p-3 bg-zinc-900 rounded-full hover:bg-green-600 hover:text-white transition-all transform hover:-translate-y-1'> <FaWhatsapp size={20}/></Link>
                    <Link href='https://www.tiktok.com/@_jenkx_dev?_r=1&_t=ZS-93aru8EwTjT' target="_blank" className='p-3 bg-zinc-900 rounded-full hover:bg-[#FE2C55] hover:text-white transition-all transform hover:-translate-y-1'> <FaTiktok size={20}/></Link>
                </div>
            </div>

            {/* Links */}
            <div className='flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium'>
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                     <Link key={item} href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} className='hover:text-blue-500 transition-colors'>
                        {item}
                     </Link>
                ))}
            </div>

            <div className='border-t border-white/5 pt-8 text-center text-xs text-zinc-600'>
                <p>&copy; {new Date().getFullYear()} Jenkins Uwagbai. Built with Next.js, Tailwind & GSAP.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;