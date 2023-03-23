import React from 'react';
import Title from '../layouts/Title';
import { Link } from 'react-router-dom';
import { mern1 } from '../../assets';

const BlogList = () => {
  return (
    <>
      <Title title='APPRECIATE YOUR FEEDBACK' des='My Blogs' />
      <h3 className='text-2xl mb-3 font-bold justify-center items-center text-center'>
        Building full application using MERN Stack in web development
      </h3>
      <div
        className='flex flex-wrap justify-center items-center text-center'
        style={{ minHeight: '350px' }}
      >
        <div className='flex flex-wrap justify-center rounded-xl p-3 items-center text-center hover:border-red-900 border-transparent border-4'>
          <Link to='/mern-stack-blog-part-1'>
            <p className='text-lg text-left mb-5'>
              Part 1: A Comprehensive information about MERN stack in Web
              Development
            </p>
            <div className='w-full rounded-lg flex-col justify-center  items-center flex-auto py-3 '>
              <img
                className=' mx-auto justify-center  items-center  rounded-lg'
                width={490}
                src={mern1}
                alt=''
              />
            </div>
          </Link>
        </div>
        <div className='flex flex-col justify-center rounded-xl p-3 items-center text-center hover:border-red-900 border-transparent border-4'>
          <Link to='/mern-stack-blog-part-2'>
            <p className='text-lg text-left mb-5'>
              Part 2: Building Full MERN Stack Web Application - Taking Note
            </p>
            <div className='w-full rounded-lg flex-col justify-center  items-center flex-auto py-3 '>
              <img
                className=' mx-auto justify-center  items-center  rounded-lg'
                width={490}
                src={mern1}
                alt=''
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogList;
