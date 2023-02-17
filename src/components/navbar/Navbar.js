import React, { useState } from 'react';
import { Link } from 'react-scroll';
//import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div>
        <img width={50} src={logo} alt='logo' />
      </div>
      <div>
        <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>
          <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
            <div className='flex gap-10 justify-between items-center'>
              <a href='/'>About Me</a>
              <a href='/mern-stack-blog'>My Blog</a>
              <a href='https://github.com/HoaLeCA'>
                <AiOutlineGithub className='text-white text-2xl mr-5' />
              </a>
            </div>
          </li>
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
            <div className='flex flex-col gap-8 py-2 relative'>
              <div>
                <img className='w-32' src={logo} alt='logo' />
                <h4 className='py-1 font-bold'>Hoa Le</h4>
                <p className='text-sm text-gray-400 mt-2'>
                  Enthusiastic and highly motivated Junior software developer
                  with a passion for working with data and new technologies
                </p>
              </div>
              <ul className='flex flex-col gap-4'>
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass='active'
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='flex flex-col gap-4'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                  CONTACT ME
                </h2>

                <div className='flex gap-4'>
                  <a href='https://www.linkedin.com/in/levanhoa/'>
                    <FaLinkedinIn className='text-white fs-3' />
                  </a>
                  <a href='https://github.com/HoaLeCA'>
                    <AiOutlineGithub className='text-white fs-3' />
                  </a>
                  <a href='https://github.com/HoaLeCA'>
                    <FaFacebookF className='text-white fs-3' />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
