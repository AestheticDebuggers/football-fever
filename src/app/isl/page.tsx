import React, { useEffect, useState } from 'react';

interface Participant {
  name: string;
  PTS: number;
  GD: number;
  PLD: number;
  W: number;
  L: number;
  D: number;
  matches: { result: 'win' | 'draw' | 'loss' }[];
}

const ISLLeaderboard = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint from your server
    fetch('YOUR_API_ENDPOINT')
      .then((response) => response.json())
      .then((data) => setParticipants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="flex h-screen bg-[#151716] justify-center items-center text-sm">
      <div className="flex flex-col justify-center text-center">
        <h1 className="flex justify-center items-center  bg-red-300">
          Indian Super League<img src="/logo.jpg" className="w-[30px] h-[30px] m-2" />
        </h1>
        <h2 className="flex flex-col justify-center items-left bg-red-300">India</h2>

        <table className="border border-white  w-60 m-4">
          <thead>
            <tr>
              <th className="p-2">TEAM</th>
              <th className="p-2">PLD</th>
              <th className="p-2">W</th>
              <th className="p-2">D</th>
              <th className="p-2">L</th>
              <th className="p-2">GD</th>
              <th className="p-2">PTS</th>
              <th className="p-2">Form</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index} className="border-b border-gray-50">
                <td className="p-2">{participant.name}</td>
                <td className="p-2">{participant.PLD}</td>
                <td className="p-2">{participant.W}</td>
                <td className="p-2">{participant.D}</td>
                <td className="p-2">{participant.L}</td>
                <td className="p-2">{participant.GD}</td>
                <td className="p-2">{participant.PTS}</td>
                <td className="p-2 flex space-x-1">
                  {participant.matches.slice(0, 5).map((match, index) => (
                    <span
                      key={index}
                      className={`inline-block w-5 h-5 text-white rounded-full ${match.result === 'win' ? 'bg-green-500' : match.result === 'draw' ? 'bg-gray-500' : 'bg-red-500'
                        }`}
                    >
                      {match.result === 'win' ? 'W' : match.result === 'draw' ? 'D' : 'L'}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ISLLeaderboard;
