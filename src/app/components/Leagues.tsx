import React from 'react'

function leagues() {
    const data = [
      { id: 1,image:'isl.jpg', name: 'Indian Super League', },
      { id: 2,image:'Saudi-Pro-league.jpg', name: 'Saudi Pro League', },
      { id: 3,image:'premier-league.jpg', name: 'Premier League', },
      { id: 4,image:'laliga.jpg', name: 'LaLiga', },
      { id: 5,image:'champ.jpg', name: 'Champions League', },
      { id: 6,image:'bundas.jpg', name: 'Bundesliga', },
      { id: 7,image:'seriea.jpg,', name: 'Serie A', },
      { id: 8,image:'lig.jpg', name: 'Ligue 1', },
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
                  <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={`${item.name} logo`} className="w-8 h-8"/>
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