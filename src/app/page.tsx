"use client"
import React from 'react';
import Navbar from './components/NavBar'; // Adjust the path if needed
import Leagues from './components/Leagues';

function Home() {
  return (
    <div className='mx-auto h-screen bg-[#151716] min-h-full min-w-full'>
      <Navbar />
      <Leagues />
      <div className='min-h-screen flex flex-col items-center mt-12 bg-[#151716] text-xl font-semibold'>
      <div className="w-full max-w-fit p-4 bg-gray-400">
        <h1 className="text-xl font-bold mb-8">Today&apos;s matches</h1>
        <p className=''></p>
      </div>
      </div>
    </div>
  );
}

export default Home;
