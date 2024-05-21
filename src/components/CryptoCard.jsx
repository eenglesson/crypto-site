import React, { useEffect, useState } from 'react';
import '../index.css';
import { cryptoCoins } from '../javascript/fetchApi';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CryptoCard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulated data fetching for mini chart (replace this with actual data fetching)
    const fetchMiniChartData = async () => {
      const prices = [65, 59, 900, 81, 346, 55, 700]; // Replace with actual price data
      const labels = Array.from(
        { length: prices.length },
        (_, i) => `Day ${i + 1}`
      );

      const data = {
        labels,
        datasets: [
          {
            data: prices,
            borderColor:
              prices[prices.length - 1] >= prices[0]
                ? 'rgba(0, 205, 0, 1)'
                : 'rgba(205, 0, 0, 1)', // Set color based on trend
            fill: false,
            tension: 0.3,
          },
        ],
      };

      setChartData(data);
    };

    fetchMiniChartData();
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='flex flex-col w-[220px] h-[180px] p-[16px] gap-[24px] rounded-[12px] shadow-mini bg-n-1/60'>
      <aside className='flex justify-between gap-4 items-center'>
        <img
          className='w-[50px] h-[50px]'
          src={cryptoCoins.BTC.img}
          alt={cryptoCoins.BTC.title}
        />
        <aside className='flex w-full h-[50px] '>
          {chartData && <Line data={chartData} options={chartOptions} />}
        </aside>
      </aside>

      <aside className='flex flex-col gap-3'>
        <div className='flex items-center gap-[8px]'>
          <h2 className='text-[18px]  text-n-7'>{cryptoCoins.BTC.title}</h2>
          <p className='text-[12px]  text-n-3'>({cryptoCoins.BTC.ticker})</p>
        </div>
        <span className='text-[28px] font-semibold text-n-7 tracking-wide'>
          $ {cryptoCoins.BTC.value}
        </span>
      </aside>
    </div>
  );
};

export default CryptoCard;
