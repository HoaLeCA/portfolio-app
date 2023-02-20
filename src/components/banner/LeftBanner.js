import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer.', 'Data Analyst.', 'Investment Analyst.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <h4 className=' text-lg font-normal'>WELCOME TO MY WEBSITE</h4>
        <h1 className='text-5xl font-bold text-white'>
          Hi, I'm <span className='text-designColor capitalize'>Hoa Le</span>
        </h1>
        <h2 className='text-3xl font-bold text-white'>
          a <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#ff014f'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
          Enthusiastic and highly motivated Junior software developer with a
          passion for working with data and new technologies.
        </p>
      </div>
      <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            Keep in touch
          </h2>
          <div className='flex gap-4'>
            <a href='https://www.linkedin.com/in/levanhoa/'>
              <FaLinkedinIn className='text-white w-10 text-3xl' />
            </a>
            <a href='https://github.com/HoaLeCA'>
              <AiOutlineGithub className='text-white w-10 text-3xl' />
            </a>
            <a href='https://github.com/HoaLeCA'>
              <FaFacebookF className='text-white w-10 text-3xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
