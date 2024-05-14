import React from 'react';
import { useState } from 'react';

function HamburgerBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button className='relative group' onClick={toggleMenu}>
      <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px]'>
        <div className='flex flex-col justify-between w-[28px] h-[20px] transform transition-all duration-300 origin-center'>
          <div
            className={`bg-n-5 h-[2px] w-7 rounded transform transition-all duration-300 origin-left ${
              isOpen ? 'translate-x-10' : ''
            }`}
          ></div>
          <div
            className={`bg-n-5 h-[2px] w-7 rounded transform transition-all duration-300 ${
              isOpen ? 'translate-x-10 delay-75' : ''
            }`}
          ></div>
          <div
            className={`bg-n-5 h-[2px] w-7 rounded transform transition-all duration-300 origin-left ${
              isOpen ? 'translate-x-10 delay-150' : ''
            }`}
          ></div>

          <div
            className={`absolute items-center justify-between rounded transform transition-all duration-500 top-2.5 -translate-x-10 ${
              isOpen ? 'translate-x-0 flex w-12' : 'flex w-0'
            }`}
          >
            <div
              className={`absolute bg-n-5 h-[2px] rounded w-[28px] transform transition-all duration-500 rotate-0 delay-300 ${
                isOpen ? 'rotate-45' : ''
              }`}
            ></div>
            <div
              className={`absolute bg-n-5 h-[2px] rounded w-[28px] transform transition-all duration-500 -rotate-0 delay-300 ${
                isOpen ? '-rotate-45' : ''
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default HamburgerBtn;
