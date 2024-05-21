import React from 'react';
import { navItems } from './javascript/premadeList';
import HamburgerBtn from './components/HamburgerBtn';

function Navbar() {
  return (
    <div className='h-screen pr-[32px] border-r-[0.5px] border-n-3 '>
      <nav className='flex flex-col gap-[64px] mt-[48px]'>
        {navItems.map((item, index) => (
          <ul key={index}>
            <li className='flex nav-link text-[24px] text-n-5 leading-4 font-medium'>
              <div className='flex gap-[16px] ml-[px]  justify-center items-center '>
                {item.icon && <item.icon />}
                {item.label}
              </div>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
