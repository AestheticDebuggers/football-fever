// components/Leaderboard.tsx
import React from 'react';

interface Participant {
  name: string;
  PTS: number;
  GD: number;
  PLD: number;
}

const ISLLeaderboard = () => {
  const participants: Participant[] = [
    { name: 'KERALA BLASTERS', PLD: 12, GD: 7, PTS: 26 },
    { name: 'GOA', PLD: 10, GD: 11, PTS: 24 },
    { name: 'ODISHA', PLD: 12, GD: 10, PTS: 24 },
    { name: 'MUMBAI CITY', PLD: 11, GD: 9, PTS: 22 },
    { name: 'MOHAN BAGAN', PLD: 10, GD: 5, PTS: 19 },
    { name: 'NORTHEAST UNITED ', PLD: 12, GD: -5, PTS: 12 },
    { name: 'CHENNAIYIN', PLD: 12, GD: -7, PTS: 12 },
    { name: 'EAST BENGAL', PLD: 10, GD: 3, PTS: 11 },
    { name: 'BENGALURU', PLD: 12, GD: -7, PTS: 11 },
    { name: 'JAMSHEDPUR', PLD: 12, GD: -3, PTS: 9 },
    { name: 'PUNJAB', PLD: 12, GD: -9, PTS: 8 },
    { name: 'HYDREBAD', PLD: 11, GD: -14, PTS: 4 },
    // Add more participants as needed
  ];

  const topTransfers = [
    { player: 'Timo werner', team: 'Tottenham Hotspur', amount: '$20 million',position:'LW,CM' },
    { player: 'Robin Koch', team: 'Eintracht Frankfurt', amount: '$20 million',position:'CB' },
    { player: 'Aurtur Guimaeres', team: 'Team C', amount: '$15 million' },
  
  ];

  return (
    <div className="flex h-screen bg-[#151716] justify-end text-sm">

      <div className='flex flex-col justify-center text-center'>
        <h1 className='flex justify-center items-center  bg-red-300'>Indian Super League<img src="/logo.jpg" className='w-[30px] h-[30px] m-2'/></h1>
         <h2 className='flex flex-col justify-center items-left bg-red-300'>India</h2>

        <table className="border border-white w-60 m-4">
          <thead>
            <tr>
              <th className="p-2">TEAM</th>
              <th className="p-2">PLD</th>
              <th className="p-2">GD</th>
              <th className="p-2">PTS</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index} className="border-b border-gray-50">
                <td className="p-2">{participant.name}</td>
                <td className="p-2">{participant.PLD}</td>
                <td className="p-2">{participant.GD}</td>
                <td className="p-2">{participant.PTS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ISLLeaderboard;