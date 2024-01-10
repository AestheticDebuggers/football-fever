import React from 'react'
interface Participant {
    name: string;
    PTS: number;
    GD: number;
    PLD: number;
    W:number;
    L:number;
    D:number;
    
    
  }
  
  const ISLLeaderboard = () => {
    const participants: Participant[] = [
      { name: 'KERALA BLASTERS', PLD: 12,W:8,D:2,L:2, GD: 7, PTS: 26 },
      { name: 'GOA', PLD: 10,W:7,D:3,L:0,GD: 11, PTS: 24 },
      { name: 'ODISHA', PLD: 12,W:7,D:3,L:2, GD: 10, PTS: 24 },
      { name: 'MUMBAI CITY', PLD: 11,W:6,D:4,L:1, GD: 9, PTS: 22 },
      { name: 'MOHAN BAGAN', PLD: 10,W:6,D:1,L:3, GD: 5, PTS: 19 },
      { name: 'NORTHEAST UNITED ', PLD: 12,W:2,D:6,L:4, GD: -5, PTS: 12 },
      { name: 'CHENNAIYIN', PLD: 12,W:3,D:3,L:6, GD: -7, PTS: 12 },
      { name: 'EAST BENGAL', PLD: 10,W:2,D:5,L:3, GD: 3, PTS: 11 },
      { name: 'BENGALURU', PLD: 12,W:2,D:5,L:5, GD: -7, PTS: 11 },
      { name: 'JAMSHEDPUR', PLD: 12,W:2,D:3,L:7, GD: -3, PTS: 9 },
      { name: 'PUNJAB', PLD: 12,W:1,D:5,L:6, GD: -9, PTS: 8 },
      { name: 'HYDREBAD', PLD: 11,W:0,D:4,L:7, GD: -14, PTS: 4 },
      // Add more participants as needed
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
              <th className="p-2">W</th>
              <th className="p-2">D</th>
              <th className="p-2">L</th>
              <th className="p-2">GD</th>
              <th className="p-2">PTS</th>
              
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
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ISLLeaderboard;