"use client"
import React from 'react';
import Navbar from './components/NavBar'; // Adjust the path if needed
import ISLLeaderboard from './components/islLeaderboard';

function Home() {
  return (
    <div className='mx-auto h-screen bg-[#151716] min-h-full min-w-full'>
      <Navbar />
      <ISLLeaderboard />
      <div className='min-h-screen flex flex-col items-center mt-12 bg-[#151716] text-xl font-semibold'>
      </div>
      
    </div>
  );
}

export default Home;
