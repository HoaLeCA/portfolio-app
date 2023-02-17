import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, mern } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full py-5 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='HAPPY TO RECEIVE YOUR FEEDBACK' des='My Blogs' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-6 xl:gap-14 mx-9'>
        <h1 className='text-center text-2xl font-bold'>
          A Comprehensive Guide to Building Dynamic Web Applications Using MERN
        </h1>
        <p className='leading-10 text-lg'>
          The world of web development is constantly evolving, and keeping up
          with the latest technologies and trends can be a challenge. There are
          many technologies that web developer chooses to build the desires
          website such Spring using Java, ASP.NET core, Django, etc. However,
          one of the most popular and versatile technology stacks for web
          development today is the MERN stack, which stands for MongoDB,
          ExpressJS, ReactJS, and NodeJS. The MERN stack is used to develop the
          web application in many big tech companies around a world such as
          Facebook, Airbnb, Netflix, Uber, Walmart, Amazon, GoDaddy, PayPal,
          etc. The MERN stack provides a complete solution for building modern
          and dynamic web applications that meet the demands of today's users.
        </p>
        <p className='leading-10 text-lg'>
          The main purpose of using MERN Stack is that developer can use
          JavaScript only and it is very convenient choice for developers who
          are already proficient in JavaScript, as they can use the same
          language for both the frontend and backend of the application. Thus,
          if someone knows JavaScript, they can easily build full web
          application.
        </p>
        <h1 className='text-center text-2xl font-bold'>
          What is advantage of using MERN Stack in web development?
        </h1>

        <ProjectsCard des=' What is MERN?!' src={mern} />
      </div>
    </section>
  );
};

export default Projects;
