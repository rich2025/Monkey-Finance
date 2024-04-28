import { useState, useEffect } from 'react';
import axios from 'axios';

const Spotlight = () => {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/stockrecommend");
    console.log(response.data);
    setArray(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const isLoggedIn = localStorage.getItem('user');

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('No user found, access denied.');
      return;
    }
    fetchAPI();
    const intervalId = setInterval(fetchAPI, 3600000); // Refresh data every hour

    return () => clearInterval(intervalId);
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100">
        <div className="flex w-full max-w-6xl text-5xl font-extrabold justify-center items-center pb-20 text-gray-800">
          <h1>Access Denied. Please <a href="/login" className="text-blue-600 hover:text-blue-800">log in</a> to view this page.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100">
      <div className="flex w-full max-w-6xl">
        <table className="border-collapse border border-slate-400 flex-none">
          <thead>
            <tr>
              <th className="border border-slate-400 bg-gray-300 px-4 py-2 text-3xl text-center font-extrabold text-gray-800">Company</th>
              <th className="border border-slate-400 bg-gray-300 px-4 py-2 text-3xl text-center font-extrabold text-gray-800">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index) => (
              <tr key={index}>
                <td className="border border-slate-400 bg-gray-100 px-4 py-2 font-bold text-center text-2xl text-gray-800">{item.company}</td>
                <td className="border border-slate-400 bg-gray-100 px-4 py-2 font-bold text-center text-2xl text-gray-800">{item.sentiment.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex-auto bg-gray-100 ml-4 p-4 flex flex-col items-end">
          <div className="w-full">
            <p className="text-5xl font-extrabold text-gray-800">Monkey Market Movers</p>
            <p className="text-3xl font-semibold pt-12 text-gray-800">Here is a curated list of 10 stocks, ranked by sentiment derived from analyzing 20 news articles per stock.</p>
            <p className="text-3xl font-semibold pt-12 text-gray-800">Sentiment analysis gauges the overall market sentiment toward each stock, providing insights into perceived value.</p>
            <p className="text-3xl font-semibold pt-12 text-gray-800">Higher sentiment scores indicate greater value attributed by the market.</p>
            <p className="text-3xl font-semibold pt-12 text-gray-800">A sentiment score of zero denotes a neutral stance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
