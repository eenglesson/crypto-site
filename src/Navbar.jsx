import React from 'react';
import { navItems } from './javascript/premadeList';
import HamburgerBtn from './components/HamburgerBtn';

function Navbar() {
  return (
    <div className='h-full'>
      <h1 className='font-semibold text-[40px] p-[32px]'>Transcendence</h1>

      <nav className='p-[16px] h-[90%] mt-[px]'>
        <div className='flex flex-col gap-[64px] mt-[48px]'>
          {navItems.map((item, index) => (
            <ul key={index}>
              <li className='flex nav-link lg:text-[20px] 2xl:text-[24px] text-n-5 leading-4 font-medium'>
                <div className='flex gap-[16px] ml-[16px]  justify-center items-center '>
                  {item.icon && <item.icon />}
                  {item.label}
                </div>
              </li>
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
