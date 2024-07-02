import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const StockGraph = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: `${symbol} Stock Price`,
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = 'FF4KQM71L6X80J6O';
      const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

      try {
        const response = await fetch(URL);
        const data = await response.json();
        const timeSeries = data['Time Series (5min)'];
        const stockPrices = [];
        const labels = [];

        for (let time in timeSeries) {
          labels.push(time);
          stockPrices.push(timeSeries[time]['4. close']);
        }

        setChartData({
          labels: labels.reverse(),
          datasets: [
            {
              label: `${symbol} Stock Price`,
              data: stockPrices.reverse(),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100 items-center justify-center p-10">
      <h2 className="text-xl font-bold mb-4">{symbol} Stock Price</h2>
      <Line data={chartData} />
    </div>
  );
};

export default StockGraph;
