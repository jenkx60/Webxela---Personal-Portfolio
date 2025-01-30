import React from 'react'

const About = () => {
  return (
    <div>
      <section className='py-20'>
          <h2 className='text-3xl font-bold text-center'>About Me</h2>
          <div className='flex flex-col gap-4 justify-center place-items-center w-1/2 mx-auto mt-5'>
            <p className='text-gray-400 text-left'>I&apos;m a Frontend Web Developer building and managing the Frontend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
            <p className='text-gray-400 text-left'>I also like sharing content related to the stuff that I have learned in Web Development so it can help other people of the Dev Community. Feel free to Connect on LinkedIn and GitHub where I post useful content related to Web Development and Programming</p>
          </div>
      </section>
    </div>
  )
}

export default About