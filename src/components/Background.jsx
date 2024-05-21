import React from 'react';

function Background() {
  return (
    <div className='absolute inset-0 w-full h-full overflow-hidden'>
      <div className='absolute top-0 left-0 w-[30%] h-[50%] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30'></div>

      <div className='absolute top-1/3 left-1/3 w-[30%] h-[50%] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50'></div>

      <div className='absolute bottom-0 right-0 w-[30%] h-[50%] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-35'></div>
    </div>
  );
}

export default Background;
