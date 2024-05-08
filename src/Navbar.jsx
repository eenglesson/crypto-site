import React from 'react';
import { navItems } from './premadeList';

function Navbar() {
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
    </div>
  );
}

export default Navbar;
