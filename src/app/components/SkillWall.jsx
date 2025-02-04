"use client"
import React, { useEffect, useState } from 'react';
import html from '@/app/public/html-icon.svg';
import css from '../public/css-icon.svg';
import javascript from '../public/javascript-programming-language-icon.svg';
import react from '../public/react-js-icon.svg';
import next from '../public/nextjs-icon.svg';
import git from '../public/git-icon.svg';
import github from '../public/github-icon.svg';
import bootstrap from '../public/bootstrap-5-logo-icon.svg';
import tailwind from '../public/tailwind-css-icon.svg';
import Image from 'next/image';
import * as motion from 'motion/react-client';

const SkillWall = () => {
    const skillImg = [
        { imgUrl: html, altText: 'HTML'},
        { imgUrl: css, altText: 'CSS'},
        { imgUrl: javascript, altText: 'JavaScript'},
        { imgUrl: react, altText: 'React'},
        { imgUrl: next, altText: 'Next'},
        { imgUrl: git, altText: 'Git'},
        { imgUrl: github, altText: 'GitHub'},
        { imgUrl: bootstrap, altText: 'Bootstrap'},
        { imgUrl: tailwind, altText: 'Tailwind'},
    ]

    const box = {
        width: '100',
        height: '100',
        borderRadius: 10,
    }

  return (
    <div className='flex justify-center gap-5 pb-20'>
        {skillImg.map((item, index) => (
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scales: 0.9 }}
                style={box}
            >
                <div key={index} className='bg-transparent rounded-full shadow-md p-4 flex justify-center items-center'>
                    <Image
                        src={item.imgUrl}
                        alt={item.altText}
                        className='w-12 h-12 object-contain' 
                    />
                </div>
            </motion.div>
        ))}
    </div>
  )
}

export default SkillWall