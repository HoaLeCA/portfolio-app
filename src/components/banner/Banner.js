import React from 'react';
import Skills from '../projects/Skill';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <>
      <section
        id='home'
        className='w-full pt-7 pb-7 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center justify-between border-b-[1px] font-titleFont border-b-black'
      >
        <LeftBanner />

        <RightBanner />
      </section>
      <Skills />
    </>
  );
};

export default Banner;
