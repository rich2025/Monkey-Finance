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

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100">
      <div className="flex w-full max-w-6xl text-5xl text- font-extrabold justify-center items-center pb-20 text-gray-800">
        <h1>Access Denied. Please <a href="/login" className="text-blue-600 hover:text-blue-800">log in</a> to view this page.</h1>
      </div>
      </div>
   
        
    );
  }


  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8081/api/stockmovement");
    console.log(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div class="flex min-h-screen items-center justify-center relative bg-gradient-to-b from-yellow-300 p-5">
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr class="bg-blue-gray-100 text-gray-700">
              <th class="py-3 px-4 text-left">Stock Name</th>
              <th class="py-3 px-4 text-left">Price</th>
              <th class="py-3 px-4 text-left">Quantity</th>
              <th class="py-3 px-4 text-left">Total</th>
              <th class="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody class="text-blue-gray-900">
            <tr class="border-b border-blue-gray-200">
              <td class="py-3 px-4">Company A</td>
              <td class="py-3 px-4">$50.25</td>
              <td class="py-3 px-4">100</td>
              <td class="py-3 px-4">$5025.00</td>
              <td class="py-3 px-4">
                <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
              </td>
            </tr>
            <tr class="border-b border-blue-gray-200">
              <td class="py-3 px-4">Company B</td>
              <td class="py-3 px-4">$75.60</td>
              <td class="py-3 px-4">150</td>
              <td class="py-3 px-4">$11340.00</td>
              <td class="py-3 px-4">
                <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
              </td>
            </tr>
            <tr class="border-b border-blue-gray-200">
              <td class="py-3 px-4">Company C</td>
              <td class="py-3 px-4">$30.80</td>
              <td class="py-3 px-4">200</td>
              <td class="py-3 px-4">$6160.00</td>
              <td class="py-3 px-4">
                <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
              </td>
            </tr>
            <tr class="border-b border-blue-gray-200">
              <td class="py-3 px-4 font-medium">Total Wallet Value</td>
              <td class="py-3 px-4"></td>
              <td class="py-3 px-4"></td>
              <td class="py-3 px-4 font-medium">$22525.00</td>
              <td class="py-3 px-4"></td>
            </tr>
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