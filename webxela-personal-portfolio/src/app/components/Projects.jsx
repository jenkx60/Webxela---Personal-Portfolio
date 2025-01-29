import React from 'react';

const projects = [
  { title: 'Project 1', description: 'This is a project description', link: 'https://www.google.com' },
  { title: 'Project 2', description: 'This is a project description', link: 'https://www.google.com' },
  { title: 'Project 3', description: 'This is a project description', link: 'https://www.google.com' },
  { title: 'Project 4', description: 'This is a project description', link: 'https://www.google.com' },
  { title: 'Project 5', description: 'This is a project description', link: 'https://www.google.com' },
  { title: 'Project 6', description: 'This is a project description', link: 'https://www.google.com' },
];

const Projects = () => {
  return (
    <div>
      <section className='py-20'>
        <h2 className='text-3xl font-bold text-center'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          {projects.map((project, index) => (
            <div key={index} className='p-4 bg-gray-100 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold'>{project.title}</h3>
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