import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
      <img
        className='w-full h-64 object-cover rounded-lg mb-2'
        src={contactImg}
        alt='contactImg'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>Hoa Le</h3>
        <p className='text-lg font-normal text-gray-400'>
          Full Stack Developer
        </p>
        <p className='text-base text-gray-400 tracking-wide'>
          Enjoy learning and working with a new teachnology.
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Email: <span className='text-lightText'>harrycodele@gmail.com</span>
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
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
  );
};

export default ContactLeft;
