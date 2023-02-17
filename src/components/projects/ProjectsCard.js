import React from 'react';

const ProjectsCard = ({ des, src }) => {
  return (
    <div className='w-2/4 p-4 items-center xl:px-12 h-auto xl:py-10 mx-auto rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
      <div className='w-full h-[80%] overflow-hidden rounded-lg items-center flex-auto  '>
        <img
          className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer'
          src={src}
          alt='src'
        />
      </div>
      <div className='w-full mt-5 flex flex-col  gap-6'>
        <div>
          <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-center'>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
