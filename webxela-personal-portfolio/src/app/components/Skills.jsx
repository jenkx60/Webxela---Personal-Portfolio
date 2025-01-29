import React from 'react';
// import { motion } from 'framer-motion';
import * as motion from 'motion/react-client';

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git"];

const Skills = () => {
  return (
    <div>
      <section className='py-20 bg-gray-400 text-center'>
        <h2 className='text-3xl font-bold'>Skills</h2>
        <div className='flex flex-wrap justify-center mt-6 space-x-4'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md px-6 py-3 rounded-lg m-2 text-black font-bold cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;