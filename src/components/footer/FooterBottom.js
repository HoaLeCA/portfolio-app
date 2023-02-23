import React from 'react';

const FooterBottom = () => {
  return (
    <div className='w-full py-6 border-t-[1px] border-t-gray-600'>
      <p className='text-center  lightText-500 text-base'>
        © {new Date().getFullYear()}. All rights reserved by Hoa Le
      </p>
    </div>
  );
};

export default FooterBottom;
