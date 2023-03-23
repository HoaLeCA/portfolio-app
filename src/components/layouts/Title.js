import React from 'react';

const Title = ({ title, des }) => {
  return (
    <div className='flex flex-col justify-center items-center text-center gap-4 font-titleFont py-5'>
      <h1 className='text-4xl md:text-4xl text-gray-300 font-bold capitalize'>
        {des}
      </h1>
      <h5 className='text-sm uppercase font-light text-designColor tracking-wide'>
        {title}
      </h5>
    </div>
  );
};

export default Title;
