"use client"
import React from 'react';
import Navbar from './components/NavBar'; // Adjust the path if needed
import Leagues from './components/Leagues';
import ISLLeaderboard from './components/islLeaderboard'; // Corrected component name

function Home() {
  return (
    <div className='mx-auto flex flex-col h-screen bg-[#151716]'>
      <Navbar />

      <div className='flex-grow flex'>
        <div className='flex-grow'>
          <Leagues />
        </div>
        <div className='flex-grow'>
          <ISLLeaderboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
