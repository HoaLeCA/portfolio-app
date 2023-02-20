import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <>
      <h6 className='text-designColor text-center tracking-[4px] uppercase mt-3'>
        My Skills
      </h6>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
      >
        <div className='w-full lgl:w-full'>
          <div className='py-12 font-titleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px] uppercase'>
              Features
            </p>

            <h2 className='text-3xl md:text-4xl font-bold'>Data Analyst</h2>
          </div>
          <div className='className="mt-14 w-full flex flex-col gap-6'>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>Java</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>90%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>Python</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[55%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>55%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>Data Analyst</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>60%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>
                Data Visualization
              </p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>50%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>
                Design and Critical Thinking
              </p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>95%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
        <div className='w-full lgl:w-full'>
          <div className='py-12 font-itleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px] uppercase'>
              Features
            </p>
            <h2 className='text-3xl md:text-4xl font-bold'>Web Development</h2>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>React</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>90%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>HTML 5</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>95%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>Bootstrap</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>60%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>JAVASCRIPT</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>75%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm uppercase font-medium'>SOFTWARE</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>90%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
