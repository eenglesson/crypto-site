import React from 'react';
import './index.css';
import { cryptoCoins } from './fetchApi';

function CryptoCard() {
  return (
    <div className='flex flex-col w-[220px] h-[150px] p-[16px] gap-[12px] rounded-[8px] bg-n-1/60'>
      <aside className='flex justify-between'>
        <img
          className='w-[40px] h-[40px]'
          src={cryptoCoins.BTC.img}
          alt={cryptoCoins.BTC.title}
        />
        <p className='text-n-6'>^{cryptoCoins.BTC.percentChange}% </p>
      </aside>
      <div className='flex items-center gap-[8px] '>
        <h2 className='text-[18px] font-semibold text-n-5'>
          {cryptoCoins.BTC.title}
        </h2>
        <p className='text-[12px] text-n-3'>({cryptoCoins.BTC.ticker})</p>
      </div>
      <span className='text-[28px] text-n-5 tracking-wide'>
        $ {cryptoCoins.BTC.value}
      </span>
    </div>
  );
}

export default CryptoCard;
