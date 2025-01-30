import React from 'react';

const projects = [
  { title: 'Password Generator', description: 'The Password Generator is a simple, user-friendly web application designed to create secure, random passwords using HTML, CSS, and JavaScript. The intuitive interface allows users to specify criteria such as password length and inclusion of password lenght, uppercase letters, lowercase letters, numbers, special characters and a clipboard. With a click of a button, the generator produces a strong, unique password, enhancing online security and protecting against unauthorized access.', link: 'https://password-generator-474.netlify.app/' },
  { title: 'SunnySide Landing Page', description: 'The SunnySide Landing Page is a modern and responsive landing made using HTML, CSS and JavaScript.', link: 'https://sunnyside-agency-landing-page-j.netlify.app/' },
  { title: 'Yayyu E-commerce Web App', description: 'Developing a user-friendly e-commerce web application designed to help users and prospective clients seamlessly browse and purchase products. The project utilizes modern web technologies such as HTML, TailwindCSS, React, and Next.js, while leveraging Shopify for its e-commerce functionality.', link: 'https://github.com/jenkx60/yayyu_product.git' },
  { title: 'Order Summary Card', description: 'The Order Summary Card is a sleek and responsive component built with HTML and CSS, designed to provide a clear and concise overview of a customers order. Featuring a visually appealing layout, the card displays key details such as product names, quantities, prices, and the total amount. Perfect for e-commerce websites, it enhances the user experience by offering an easy-to-read summary, ensuring customers can quickly review their purchases before proceeding to checkout.', link: 'https://order-summary-card-j.netlify.app/' },
  { title: 'Blog Post Card', description: 'The Blog Post Card is an elegant and modern component crafted with HTML and CSS, designed to highlight individual blog posts in a visually appealing manner. This card includes a title, summary, publication date, and a featured image, providing readers with a snapshot of the content. Ideal for blogs and news websites, it enhances readability and engagement by presenting posts in a clean, organized layout, encouraging users to click through and read the full articles.', link: 'https://blog-review-card-main.netlify.app/' },
  { title: 'Social Links Card', description: 'The Social Links Card is a stylish and compact component created with HTML and CSS, designed to showcase social media profiles in a visually cohesive manner. Featuring recognizable icons and links to platforms such as Facebook, Twitter, Instagram, and LinkedIn, this card offers a convenient way for users to connect and engage with you across various social networks. Perfect for personal websites, portfolios, and blogs, it enhances your online presence by providing a neat and organized way to access your social media channels.', link: 'https://social-links-profile-jenkins.netlify.app/' },
];

const Projects = () => {
  return (
    <div>
      <section className='py-20'>
        <h2 className='text-3xl font-bold text-center'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          {projects.map((project, index) => (
            <div key={index} className='p-4 bg-gray-100 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-black mb-3'>{project.title}</h3>
              <p className='text-gray-600'>{project.description}</p>
              <a href={project.link} className='text-blue-500 mt-2 block'>View Project</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;