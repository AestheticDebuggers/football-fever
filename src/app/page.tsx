"use client"
import React from 'react';
import Navbar from './components/NavBar'; // Adjust the path if needed

function Home() {
  return (
    <div className='mx-auto h-screen bg-black min-h-full min-w-full'>
      <Navbar />
      {/* Add your main content here */}
    </div>
  );
}

export default Home;
