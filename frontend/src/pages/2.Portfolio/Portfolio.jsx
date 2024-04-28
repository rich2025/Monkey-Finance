import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const Portfolio = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'AAPL Stock Price',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  });

  const [stockMovements, setStockMovements] = useState([]);

  // Check user login status directly from localStorage
  const isLoggedIn = localStorage.getItem('user');

  const fetchData = async () => {
    const API_KEY = 'FF4KQM71L6X80J6O';
    const SYMBOL = 'AAPL';
    const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=5min&apikey=${API_KEY}`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      const timeSeries = data['Time Series (5min)'];
      const labels = [];
      const stockPrices = [];

      for (let key in timeSeries) {
        labels.push(key);
        stockPrices.push(timeSeries[key]['4. close']);
      }

      setChartData({
        labels: labels.reverse(),
        datasets: [{
          label: 'AAPL Stock Price',
          data: stockPrices.reverse(),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('No user found, access denied.');
      return;
    }
    fetchData();
    const intervalId = setInterval(fetchData, 3600000); // Refresh data every hour
    return () => clearInterval(intervalId);
  }, [isLoggedIn]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/stockmovement");
      setStockMovements(response.data);
    } catch (error) {
      console.error('Failed to fetch stock movements:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Access Denied. Please <a href="/login" className="text-blue-600 hover:text-blue-800">log in</a> to view this page.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center relative bg-gradient-to-b from-yellow-300 p-5">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Ticker Symbol</th>
              <th className="py-3 px-4 text-left">Recent Close Price</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
        
          <tbody className="text-blue-gray-900">
            {Object.entries(stockMovements).length > 0 ? (
              Object.entries(stockMovements).map(([symbol, details], index) => (
                <tr key={index} className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">{symbol}</td>
                  <td className="py-3 px-4">
                    ${details && details.RecentClose ? details.RecentClose.toFixed(2) : 'N/A'}
                  </td>
                  <td className="py-3 px-4">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-3 px-4 text-center">
                  No stock data available.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
      <div className="w-full max-w-md pt-5 px-4 mb-8">
        <Line data={chartData} />
      </div>
    </div>
  );
};
export default Portfolio;