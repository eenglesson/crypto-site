import React from 'react';
import CryptoCard from './components/CryptoCard';
import Navbar from './Navbar';
import Background from './components/Background';
import Header from './components/Header';
import MainBalance from './components/MainBalance';
import Dashboard from './page/Dashboard';

function App() {
  return (
    <div className='relative w-full h-screen flex'>
      <div className='relative bg-bg-1 flex justify-center w-full overflow-hidden backdrop-filter backdrop-blur-[100px]'>
        <Background />
        <div className='relative max-w-[2000px] bg-white/40 backdrop-filter backdrop-blur-lg flex-col w-full h-full '>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
