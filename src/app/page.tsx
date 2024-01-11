"use client"
import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar';
import Leagues from './components/Leagues';
import ISLLeaderboard from './components/islLeaderboard';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
}

function Home() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    // Fetch the matches from your API
    fetch('/api/matches')
      .then(response => response.json())
      .then(data => setMatches(data));
  }, []);

  return (
    <div className='mx-auto flex flex-col h-screen bg-[#151716]'>
      <Navbar />

      <div className='flex-grow flex'>
        <div className='flex-grow'>
          <Leagues />
        </div>
        <div className="bg-black w-[55%] h-[55%] p-4  mt-10 mx-16 space-y-4 rounded-lg">
          {matches.map(match => (
            <span key={match.id} className="block h-12 bg-gray-400 rounded-xl text-white hover:text-teal-800">
              {match.homeTeam} Vs {match.awayTeam}
            </span>
          ))}
        </div>
        <div className='flex-grow'>
          <ISLLeaderboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
