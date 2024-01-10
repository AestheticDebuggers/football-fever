import React from 'react'

function leagues() {
    const data = [
      { id: 1,image:'isl.jpg', name: 'Indian Super League', },
      { id: 2,image:'', name: 'Saudi Pro League', },
      { id: 3,image:'', name: 'Premier League', },
      { id: 4,image:'', name: 'LaLiga', },
      { id: 5,image:'', name: 'Champions League', },
      { id: 6,image:'', name: 'Bundesliga', },
      { id: 7,image:'', name: 'Serie A', },
      { id: 8,image:'', name: 'Ligue 1', },
      // Add more items as needed
    ];
  
    return (
      <div className='h-screen bg-black'>
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
                  <td className="p-4 text-center">
                  <img src={item.image} alt={`${item.name} logo`} className="w-8 h-8" /> {/* Adjust the size as needed */}
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default leagues;