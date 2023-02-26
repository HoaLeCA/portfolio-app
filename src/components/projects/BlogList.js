import React from 'react';
import Title from '../layouts/Title';
import { Link } from 'react-router-dom';
import { mern1 } from '../../assets';

const BlogList = () => {
  return (
    <div
      className='flex flex-col justify-center items-center text-center'
      style={{ minHeight: '350px' }}
    >
      <Title title='HAPPY TO RECEIVE YOUR FEEDBACK' des='My Blogs' />

      <div className='flex flex-col justify-center rounded-xl p-5 items-center text-center hover:border-red-900 border-transparent border-4'>
        <Link to='/mern-stack-blog-part-1'>
          <h5 className='text-xl py-3'>
            Building full application using MERN Stack in web development
          </h5>
          <p className='text-lg text-left'>
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
    </div>
  );
};

export default BlogList;
