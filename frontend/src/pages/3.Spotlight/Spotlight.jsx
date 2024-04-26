import { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/stockrecommend");
    console.log(response.data);
    setArray(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100">
      <div className="flex w-full max-w-6xl">
        <table className="border-collapse border border-slate-400 flex-none">
          <thead>
            <tr>
              <th className="border border-slate-400 bg-gray-300 px-4 py-2 text-3xl text-center">Company</th>
              <th className="border border-slate-400 bg-gray-300 px-4 py-2 text-3xl text-center">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index) => (
              <tr key={index}>
                <td className="border border-slate-400 bg-gray-100 px-4 py-2 font-bold text-center text-2xl">{item.company}</td>
                <td className="border border-slate-400 bg-gray-100 px-4 py-2 font-bold text-center text-2xl">{item.sentiment.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex-auto bg-gray-100 ml-4 p-4 flex flex-col items-end">
         
        {/* <img src="https://i.ibb.co/nMgspdw/istockphoto-1202029759-612x612-Photoroom-png-Photoroom.png" alt="Descriptive Image Text" className="w-100 h-20 -mt-10" /> */}

          <div className="w-full">
            <p className="text-4xl font-bold">Monkey Market Movers</p>
            <p className="text-2xl font-semibold pt-12">Below is a curated list of 11 stocks, ranked by sentiment derived from analyzing 20 news articles per stock.</p>
            <p className="text-2xl font-semibold pt-12">Sentiment analysis gauges the overall market sentiment toward each stock, providing insights into perceived value.</p>
            <p className="text-2xl font-semibold pt-12">Higher sentiment scores indicate greater value attributed by the market.</p>
            <p className="text-2xl font-semibold pt-12">A sentiment score of zero denotes a neutral stance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
