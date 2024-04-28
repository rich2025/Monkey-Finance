import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Trends = () => {
  const [stockMovements, setStockMovements] = useState([]);

  // Check user login status directly from localStorage
  const isLoggedIn = localStorage.getItem('user');

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
            <tr className="bg-blue-gray-100 text-gray-700 text-2xl">
              <th className="py-3 px-4 text-left">Ticker Symbol</th>
              <th className="py-3 px-4 text-left">Recent Close Price</th>
              <th className="py-3 px-4 text-left">Graph</th>
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
                    <Link to={`/graph/${symbol}`} className="font-medium text-blue-600 hover:text-blue-800">
                      View
                    </Link>
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
    </div>
  );
};

export default Trends;
