import React from 'react';
// import { motion } from 'framer-motion';
import * as motion from 'motion/react-client';
import html from '../public/html-icon.svg';
import css from '../public/css-icon.svg';
import javascript from '../public/javascript-programming-language-icon.svg';
import react from '../public/react-js-icon.svg';
import next from '../public/nextjs-icon.svg';
import bootstrap from '../public/bootstrap-5-logo-icon.svg';
import tailwind from '../public/tailwind-css-icon.svg';
import Image from 'next/image';

const skills = [
  { stack: 'HTML', image: html },
  { stack: 'CSS', image: css },
  { stack: 'JavaScript', image: javascript },
  { stack: 'React', image: react },
  { stack: 'Next.js', image: next },
  { stack: 'BootStrap', image: bootstrap }, 
  { stack: 'Tailwind', image: tailwind },
];

const Skills = () => {
  return (
    <div>
      <section className='py-20 bg-gray-400 text-center'>
        <h2 className='text-3xl font-bold'>Skills</h2>
        <div className='flex flex-wrap justify-evenly mt-6 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-2xl p-5 rounded-xl text-black font-bold cursor-pointer md:p-3 sm:p-2"
              whileHover={{ scale: 1.5 }}
            >
              <div className='flex flex-wrap items-center'>
                <Image src={skill.image} alt={skill.stack} width={30} height={10} className='grid place-items-center'/>
                <h2 className='md:text-lg sm:text-base'>{skill.stack}</h2>
              </div>
              
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;