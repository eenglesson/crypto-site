import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CryptoChart = ({ coinId = 'ethereum' }) => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [coinName, setCoinName] = useState('');
  const [lineColor, setLineColor] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [priceResult, coinResult] = await Promise.all([
          axios.get(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
            {
              params: {
                vs_currency: 'usd',
                days: '7', // Change this to the desired timeframe
              },
            }
          ),
          axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`),
        ]);

        const prices = priceResult.data.prices;
        const coinName = coinResult.data.name; // Fetch the coin name

        // Determine if the price has gone up or down today
        const today = new Date().setHours(0, 0, 0, 0);
        const todayPrices = prices.filter(
          (price) => new Date(price[0]).setHours(0, 0, 0, 0) === today
        );

        const firstPriceToday =
          todayPrices.length > 0 ? todayPrices[0][1] : null;

        const lastPriceToday =
          todayPrices.length > 0
            ? todayPrices[todayPrices.length - 1][1]
            : null;

        const lineColor =
          lastPriceToday >= firstPriceToday
            ? 'rgba(0, 205, 0, 1)'
            : 'rgba(205, 0, 0, 1)';

        const data = {
          labels: prices.map((price) =>
            new Date(price[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: `$${coinId.toUpperCase()} Price (USD)`,
              data: prices.map((price) => price[1]),
              borderColor: lineColor, // Set the dynamic line color
              fill: false,
              pointRadius: 0, // Remove the small dots
              pointHoverRadius: 1,
              tension: 0.3, // Smooth the line
            },
          ],
        };

        setChartData(data);
        setCoinName(coinName);
        setLineColor(lineColor); // Store the line color
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from CoinGecko', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Remove the label on top of the chart
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            const value = context.parsed.y.toFixed(0); // Remove decimals
            return `${coinName} Price: $${value}`;
          },
          labelColor: function () {
            return {
              borderColor: lineColor,
              backgroundColor: lineColor,
            };
          },
        },
        bodyFont: {
          family: 'Plus Jakarta Sans',
          weight: '500', // Set the font weight for the tooltip
        },
        titleFont: {
          family: 'Plus Jakarta Sans',
          weight: '500', // Set the font weight for the tooltip title
        },
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove the background grid/checkers
        },
        border: {
          color: 'transparent', // Remove the border line of the x-axis
        },
        ticks: {
          callback: function (value) {
            // Convert date labels to weekday names
            const date = new Date(this.getLabelForValue(value));
            return date.toLocaleDateString('en-US', { weekday: 'short' });
          },
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 7, // Limit to one tick per day
          color: '#828493', // Customize tick color if needed
          font: {
            family: 'Plus Jakarta Sans',
            weight: '500',
            size: '14px',
          },
          padding: 10, // Add padding to x-axis ticks
        },
      },
      y: {
        grid: {
          display: false, // Remove the background grid/checkers
        },
        border: {
          color: 'transparent', // Remove the border line of the y-axis
        },
        ticks: {
          callback: function (value) {
            return `$${value}`; // Add dollar sign in front of y-axis ticks
          },
          color: '#828493', // Customize tick color if needed
          font: {
            family: 'Plus Jakarta Sans',
            weight: '500',
            size: '14px',
          },
          padding: 10, // Add padding to x-axis ticks
        },
      },
    },
  };

  return (
    <div className='flex w-full h-[500px] bg-n-1/60 p-4 rounded-[16px] shadow-mini'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default CryptoChart;
