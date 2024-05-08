import React from 'react';
import { navItems } from './premadeList';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <h1 className='font-semibold'>Crypto-site</h1>
        <div className='flex flex-col gap-[32px] mt-[32px]'>
          {navItems.map((item) => (
            <ul>
              <li key={item.label} className='text-n-4 leading-4 nav-link'>
                {item.label}
              </li>
            </ul>
          ))}
        </div>
      </nav>
      <button className='relative group' onClick={toggleMenu}>
        <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px]'>
          <div className='flex flex-col justify-between w-[28px] h-[20px] transform transition-all duration-300 origin-center'>
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 origin-left ${
                isOpen ? 'translate-x-10' : ''
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                isOpen ? 'translate-x-10 delay-75' : ''
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 origin-left ${
                isOpen ? 'translate-x-10 delay-150' : ''
              }`}
            ></div>

            <div
              className={`absolute items-center justify-between rounded transform transition-all duration-500 top-2.5 -translate-x-10 ${
                isOpen ? 'translate-x-0 flex w-12' : 'flex w-0'
              }`}
            >
              <div
                className={`absolute bg-white h-[2px] rounded w-[28px] transform transition-all duration-500 rotate-0 delay-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              ></div>
              <div
                className={`absolute bg-white h-[2px] rounded w-[28px] transform transition-all duration-500 -rotate-0 delay-300 ${
                  isOpen ? '-rotate-45' : ''
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Navbar;
