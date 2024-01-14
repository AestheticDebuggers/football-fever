// ... (imports)
"use client"
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

interface Team {
  id: string;
  name: string;
  PTS: number;
  GD: number;
  PLD: number;
}

const ISLLeaderboard = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsCollection = collection(db, "teams");
        const querySnapshot = await getDocs(teamsCollection);

        const teamsData: Team[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          teamsData.push({
            id: doc.id,
            name: data.Name,
            PTS: data.PTS,
            GD: data.GD,
            PLD: data.PLD,
          });
        });

        setTeams(teamsData);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
    fetchTeams();
  }, []);

  return (
    <div className="flex h-fit bg-[#232323] justify-center items-center text-sm rounded-[20px] m-5">
      <div className="flex flex-col justify-center text-center w-[86%]">
        <h1 className="flex justify-center items-center bg-[#232323] w-full text-lg font-bold p-4">
          Indian Super League<img src="/logo.jpg" className="w-[30px] h-[30px] m-2" />
        </h1>
        <h2 className="flex justify-center items-left text-base font-semibold border-b bg-[#232323] w-full">India</h2>

        {/* Team Leaderboard Table */}
        <table className=" w-full m-4 mx-auto">
          <thead className="">
            <tr>
              <th className="text-start p-2">TEAM</th>
              <th className="p-2">PLD</th>
              <th className="p-2">GD</th>
              <th className="p-2">PTS</th>
            </tr>
          </thead>
          <tbody className="">
            {teams
              .sort((a, b) => b.PTS - a.PTS)
              .map((team) => (
                <tr key={team.id}>
                  <td className="flex items-center p-2">
                    <img src={`${team.name}.png`} className='w-[20px] h-[20px] mr-2' alt={`${team.name} logo`} />
                    {team.name}
                  </td>
                  <td className="p-2">{team.PLD}</td>
                  <td className="p-2">{team.GD}</td>
                  <td className="p-2">{team.PTS}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ISLLeaderboard;
