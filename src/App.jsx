import React from 'react';
import CryptoCard from './CryptoCard';
import Navbar from './Navbar';
import Background from './components/Background';

function App() {
  return (
    <div className='relative w-full h-screen flex justify-center'>
      <div className='relative bg-bg-1 flex justify-center w-full overflow-hidden backdrop-filter backdrop-blur-[100px]'>
        <Background />
        <div className='relative max-w-[2000px] bg-bg-1/40 backdrop-filter backdrop-blur-lg flex w-full h-full '>
          <Navbar />
          <CryptoCard />
          <CryptoCard />
        </div>
      </div>
    </div>
  );
}

export default App;
