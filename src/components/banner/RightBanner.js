import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
      <img
        className='w-[250px] h-[330px] lgl:w-[230px] lgl:h-[280px] z-10 rounded-lg'
        src={bannerImg}
        alt='bannerImg'
      />
      <div className='absolute bottom-0 w-[280px] h-[350px] lgl:w-[260px] lgl:h-[300px] rounded-xl bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
    </div>
  );
};

export default RightBanner;
