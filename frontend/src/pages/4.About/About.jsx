import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100 items-center justify-center p-10">
      <div className="text-center max-w-4xl p-5 bg-white rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold text-gray-800 mt-4 mb-6">About Monkey Finance</h1>
        <p className="text-xl font-semibold text-gray-700 mb-4">
          Monkey Finance is your go-to app for tracking the stock market and discovering the best investment opportunities available each day. With real-time data and expert analysis, our platform ensures you never miss a beat in the fast-paced world of finance.
        </p>
        <p className="text-xl font-semibold text-gray-700 mb-4">
          Our daily recommendations are based on advanced sentiment analysis of news articles, helping you understand market trends and make informed decisions quickly. Whether you're a seasoned investor or just starting out, Monkey Finance provides all the tools you need to succeed.
        </p>
        <p className="text-3xl text-gray-700 mb-4 font-bold">
          Key features include:
        </p>
        <ul className="text-2xl text-gray-700 list-disc list-inside mb-6 font-semibold">
          <li>Real-time stock tracking</li>
          <li>Daily investment recommendations</li>
          <li>Insightful sentiment analysis</li>
          <li>User-friendly interface</li>
          <li>Secure and reliable data handling</li>
        </ul>
        <p className="text-2xl text-gray-700 font-semibold">
          Join Monkey Finance today and take control of your financial future!
        </p>
    
        <p className="text-sm text-gray-700">
          CS411 Spring 2024: Richard Yang, Daniel Kim, Edward Wang, Jian Ying Liu
        </p>
      </div>
    </div>
  )
}

export default About;
