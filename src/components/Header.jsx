import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Header() {
  return (
    <header className='flex w-full gap-[40px] items-center h-[100px] border-b-[0.5px] border-n-3 '>
      <div className='h-full'>
        <h1 className='flex text-[40px] w-[232px] items-center justify-center h-full font-extrabold text-n-11 border-r-[0.5px] border-n-3 cursor-auto'>
          Crypto
        </h1>
      </div>
      <aside className='flex max-w-[600px] justify-between items-center w-full'>
        <h2 className='text-[32px] ml-[0px] font-semibold text-n-11 hover:text-n-10'>
          Dashboard
        </h2>
        <div className='w-[240px] md:w-[300px] h-[48px] flex items-center bg-white rounded-[24px] gap-[12px] shadow-mini'>
          <FiSearch className='ml-[16px] w-[24px] h-[24px] text-n-3' />
          <input
            className='flex bg-transparent w-full font-semibold text-[14px] rounded-[16px] h-full outline-none placeholder:text-n-3 '
            type='text'
            placeholder='Search'
          />
        </div>
      </aside>
    </header>
  );
}

export default Header;
