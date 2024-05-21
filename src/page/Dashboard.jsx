import React from 'react';
import Header from '../components/Header';
import Navbar from '../Navbar';
import MainBalance from '../components/MainBalance';
import CryptoCard from '../components/CryptoCard';
import CryptoChart from '../components/CryptoChart';

function Dashboard() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flex pl-[32px]'>
        <Navbar />
        <div className='w-full m-[40px] flex flex-col gap-[32px]'>
          <MainBalance />
          <CryptoChart />
          <CryptoCard />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
