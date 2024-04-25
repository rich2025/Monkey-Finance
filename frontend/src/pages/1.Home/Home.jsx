import { useState } from 'react';


export default function Example() {

  return (
    <div className="relative bg-gradient-to-b from-yellow-300">

      {/* Picture */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          className="absolute object-cover w-lvh h-full"
          src="https://static.vecteezy.com/system/resources/previews/029/200/269/original/banana-transparent-background-free-png.png"
          alt="Background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pt-14 lg:px-8">

        {/* Text */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="font-extrabold text-gray-900 text-7xl">
            MONKEY FINANCE
          </h1>
          <p className="mt-6 text-3xl leading-8 text-gray-700 font-semibold">
            It's not monkey business, it's Monkey Finance!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/portfolio"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Started
            </a>
            <a href="/about" className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
