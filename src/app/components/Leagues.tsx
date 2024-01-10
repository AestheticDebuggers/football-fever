import React from 'react'

function leagues() {
  const data = [
    { id: 1, name: 'Indian Super League', },
    { id: 2, name: 'Saudi Pro League', },
    { id: 3, name: 'Premier League', },
    { id: 4, name: 'LaLiga', },
    { id: 5, name: 'Champions League', },
    { id: 6, name: 'Bundesliga', },
    { id: 7, name: 'Serie A', },
    { id: 8, name: 'Ligue 1', },
    // Add more items as needed
  ];

  return (
    <div className='h-screen bg-[#151716]'>
      <div className="flex h-[65%]">
        <table className="m-4 w-60 border border-gray-500 rounded-md shadow-md">
          <thead>
            <tr>
              <th className="text-centre">TOP LEAGUES</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="flex">
                <td className="p-4 text-center">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default leagues;