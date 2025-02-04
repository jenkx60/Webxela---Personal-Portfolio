import React from 'react';
import * as motion from 'motion/react-client';
import password from '../public/pass_shots_so.png';
import sunny from '../public/sunny_shots_so.png';
import yayyu from '../public/yayyu_app_shots_so.png';
import order from '../public/order_shots_so.png';
import blog from '../public/blog_shots_so.png';
import social from '../public/links_shots_so.png';
import typing from '../public/typing_shots_so.png';
import portfolio from '../public/portfolio_shots_so.png';
import Image from 'next/image';


const projects = [
  { image: yayyu, 
    title: 'Yayyu E-commerce Web App', 
    description: 'Developing a user-friendly e-commerce web application designed to help users and prospective clients seamlessly browse and purchase products. The project utilizes modern web technologies such as HTML, TailwindCSS, React, and Next.js, while leveraging Shopify for its e-commerce functionality.', 
    link: 'https://github.com/jenkx60/yayyu_product.git', 
    skill: ['HTML', ',', ' ', 'TailwindCSS', ',', ' ', 'React', ',', ' ', 'Next.Js', ',', ' ', 'Shopify'] 
  },
  {
    image: typing,
    title: 'Typing Test App',
    description: 'A sleek and responsive typing test web app built with Next.js. It helps users improve their typing speed and accuracy with real-time performance tracking. Features include interactive typing area with dynamic word generation, real-time WPM and accuracy tracking, clean and intuitive UI, optimized for speed and responsiveness. This project showcases my skills in frontend development, state management, and UI/UX design.',
    link: 'https://jenkx-typing-test.netlify.app/',
    skill: ['Next.js', ',', ' ', 'JavaScript', ',', ' ', 'HTML', ',',]
  },
  {
    image: portfolio,
    title: 'Personal Portfolio Website',
    description: 'A modern and responsive portfolio website designed to showcase my skills, projects, experience, and achievements as a frontend web developer. Features includes; Dynamic Project Showcase with live demos, Contact Form powered by Supabase, Downloadable Resume for easy access, Smooth UI/UX with fast navigation. This project highlights my expertise in frontend development, UI/UX design, and state management while ensuring a seamless user experience.',
    link: 'https://jenkinsuwagbai.webxela.com',
    skill: ['Next.js', ',', ' ', 'React', ',', ' ', 'JavaScript', ',', ' ', 'Supabase', ',', ' ', 'TailwindCSS', ',', ' ','HTML']
  },
  { 
    image: password.src, 
    title: 'Password Generator', 
    description: 'The Password Generator is a simple, user-friendly web application designed to create secure, random passwords using HTML, CSS, and JavaScript. The intuitive interface allows users to specify criteria such as password length and inclusion of password lenght, uppercase letters, lowercase letters, numbers, special characters and a clipboard. With a click of a button, the generator produces a strong, unique password, enhancing online security and protecting against unauthorized access.', 
    link: 'https://password-generator-474.netlify.app/', 
    skill: ['HTML', ',', ' ', 'CSS', ',', ' ', 'JavaScript'] 
  },
  { 
    image: sunny.src, 
    title: 'SunnySide Landing Page', 
    description: 'A beautifully designed, responsive landing page for a creative agency. This project focuses on clean UI, smooth interactions, and modern web design principles. Features: Engaging Hero Section with a bold CTA, Services Overview showcasing agency offerings, Client Testimonials for credibility, Grid-Based Gallery displaying creative work, Fully Responsive Design for seamless user experience. This project demonstrates my expertise in frontend development, responsive design, and UI/UX best practices.', 
    link: 'https://sunnyside-agency-landing-page-j.netlify.app/', 
    skill: ['HTML',',', ' ', 'CSS',',', ' ', 'JavaScript'] 
  },
  { 
    image: order, 
    title: 'Order Summary Card', 
    description: 'The Order Summary Card is a sleek and responsive component built with HTML and CSS, designed to provide a clear and concise overview of a customers order. Featuring a visually appealing layout, the card displays key details such as product names, quantities, prices, and the total amount. Perfect for e-commerce websites, it enhances the user experience by offering an easy-to-read summary, ensuring customers can quickly review their purchases before proceeding to checkout.', 
    link: 'https://order-summary-card-j.netlify.app/', 
    skill: ['HTML', ',', ' ', 'CSS'] 
  },
  { 
    image: blog, 
    title: 'Blog Post Card', 
    description: 'The Blog Post Card is an elegant and modern component crafted with HTML and CSS, designed to highlight individual blog posts in a visually appealing manner. This card includes a title, summary, publication date, and a featured image, providing readers with a snapshot of the content. Ideal for blogs and news websites, it enhances readability and engagement by presenting posts in a clean, organized layout, encouraging users to click through and read the full articles.', 
    link: 'https://blog-review-card-main.netlify.app/', 
    skill: ['HTML', ',', ' ', 'CSS'] 
  },
  { 
    image: social, 
    title: 'Social Links Card', 
    description: 'The Social Links Card is a stylish and compact component created with HTML and CSS, designed to showcase social media profiles in a visually cohesive manner. Featuring recognizable icons and links to platforms such as Facebook, Twitter, Instagram, and LinkedIn, this card offers a convenient way for users to connect and engage with you across various social networks. Perfect for personal websites, portfolios, and blogs, it enhances your online presence by providing a neat and organized way to access your social media channels.', 
    link: 'https://social-links-profile-jenkins.netlify.app/', 
    skill: ['HTML', ',', ' ', 'CSS'] 
  },
];

const Projects = () => {
  return (
    <div className='container my-20 px-4 md:px-20'>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className='relative flex flex-col items-center mt-20 mb-20'>
            <div className='absolute text-center mt-5'>
              <h1 className='text-4xl font-intert font-extrabold text-blue-500 pb-4'>PROJECT</h1>
              <hr className=' border-blue-500 border-2 w-24 md:w-58 mx-auto'/>
            </div>

            <div>
              <h1 className='text-6xl md:text-9xl font-intert font-extrabold opacity-10'>PROJECT</h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            {projects.map((project, index) => (
              <div key={index} className='p-4 bg-gray-200 rounded-lg shadow-md'>
                <Image src={project.image} alt={project.title} width={300} height={300} className='rounded-lg pb-8' />
                {/* <div className='flex justify-between items-center mb-3'> */}
                  <h3 className='text-xl font-semibold text-black mb-2'>{project.title}</h3>
                  <p className='text-blue-500 font-semibold pb-3'>{project.skill.join('')}</p>
                {/* </div> */}
                <p className='text-gray-600'>{project.description}</p>
                <button className='bg-blue-500 text-white py-2 px-4 rounded-lg mt-4'>
                  <a href={project.link} className='block'>Live Demo</a>
                </button>
              </div>
            ))}
          </div>
        </motion.div>
        
      </section>
    </div>
  );
};

export default Projects;