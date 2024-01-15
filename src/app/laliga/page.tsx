// ... (imports)
"use client"
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

interface Team {
    id: string;
    name: string;
    PTS: number;
    GD: number;
    PLD: number;
    W: number;
    L: number;
    D: number;
    matches: string;
}

const LaligaLeaderboard = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                // Add a condition to filter teams based on the league (e.g., "Premier League")
                const teamsCollection = collection(db, "teams");
                const teamsQuery = query(teamsCollection, where("League", "==", "LaLiga"));
                const querySnapshot = await getDocs(teamsQuery);

                const teamsData: Team[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    teamsData.push({
                        id: doc.id,
                        name: data.Name,
                        PTS: data.PTS,
                        GD: data.GD,
                        PLD: data.PLD,
                        W: data.W,
                        L: data.L,
                        D: data.D,
                        matches: data.matches,
                    });
                });

                setTeams(teamsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching teams:', error);
                setLoading(false);
            }
        };
        fetchTeams();
    }, []);

    return (
        <div className="flex h-screen bg-[#151716] justify-center items-center text-sm">
            <div className="flex flex-col justify-center text-center w-[75%]">
                <h1 className="flex justify-center items-center bg-[#232323] w-full text-lg font-bold p-4">
                    LaLiga<img src="/LaLiga.png" className="w-[30px] h-[30px] m-2" />
                </h1>
                <h2 className="flex justify-center items-left text-base font-semibold bg-[#232323] w-full">Spain</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="w-full m-4 mx-auto my-auto bg-[#232323]">
                        <thead>
                            <tr>
                                <th className="text-start p-2">TEAM</th>
                                <th className="p-2">PLD</th>
                                <th className="p-2">W</th>
                                <th className="p-2">D</th>
                                <th className="p-2">L</th>
                                <th className="p-2">GD</th>
                                <th className="p-2">PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams
                                .sort((a, b) => b.PTS - a.PTS)
                                .map((team) => (
                                    <tr key={team.id}>
                                        <td className="flex items-center p-2">
                                            {team.name && <img src={`${team.name}.png`} className="w-[20px] h-[20px] mr-2" alt={`${team.name} logo`} />}
                                            <span>{team.name}</span>
                                        </td>
                                        <td className="p-2">{team.PLD}</td>
                                        <td className="p-2">{team.W}</td>
                                        <td className="p-2">{team.D}</td>
                                        <td className="p-2">{team.L}</td>
                                        <td className="p-2">{team.GD}</td>
                                        <td className="p-2">{team.PTS}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default LaligaLeaderboard;
