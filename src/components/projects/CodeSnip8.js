import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnip8 = (props) => {
  const [copy, setCopy] = useState(false);
  const codeString = `
  const express = require("express")
  const router = express.Router()
  const {registerUser, loginUser} = 
        require("../controller/userController")
  const {protect} = require("../middleware/authMiddleware")
  router.post("/", registerUser) // use to registe new user
  router.post("/login", loginUser) // use to login
  module.exports = router
    
  `;
  const des = props.des;
  return (
    <div className='w-3/4 p-3 items-center xl:px-12 h-auto xl:py-10 mx-auto rounded-md shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
      <div className='w-full h-[70%] overflow-hidden rounded-md items-center flex-auto'>
        <div className='flex justify-between text-white text-xs items-center overflow-hidden'>
          <p className='text-sm mb-2'>Example code</p>
          {copy ? (
            <button className='py-1 inline-flex items-center gap-1 mb-2'>
              <span className='text-base '>
                <ion-icon name='checkmark-sharp'></ion-icon>
              </span>
              Copied!
            </button>
          ) : (
            <button
              className='py-1 inline-flex items-center gap-1  mb-2'
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className='text-base '>
                <ion-icon name='clipboard-outline'></ion-icon>
              </span>
              Copy code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          customStyle={{ padding: '25px' }}
          wrapLongLines={true}
          language='javascript'
          style={atomOneDark}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className='w-full mt-5 flex flex-col  gap-6'>
        <div className=''>
          <p className='text-sm tracking-wide mt-0 hover:text-gray-100 duration-300 text-center'>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeSnip8;
