// ... (imports)
"use client"
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

interface Stat {
    id: string;
    Name: string;
    Team: string;
    Goals: number;
    Assists: number;
    Yellows: number;
    Reds: number;
}

const ISLstats = () => {
    const [stats, setStats] = useState<Stat[]>([]);

    useEffect(() => {
        const fetchstats = async () => {
            try {
                const statsCollection = collection(db, "stats");
                const querySnapshot = await getDocs(statsCollection);

                const statsData: Stat[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    statsData.push({
                        id: doc.id,
                        Name: data.Name,
                        Team: data.Team,
                        Goals: data.Goals,
                        Assists: data.Assists,
                        Yellows: data.Yellows,
                        Reds: data.Reds,
                    });
                });

                setStats(statsData);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };
        fetchstats();
    }, []);

    const renderTopPlayers = (statName: string, sortBy: keyof Stat) => (
        <table className="w-full m-4 mx-auto">
            <thead>
                <tr>
                    <th className="text-start p-2">{`Top ${statName}`}</th>
                    <th className="p-2">{statName}</th>
                </tr>
            </thead>
            <tbody>
                {stats
                    .sort((a, b) => (b[sortBy] as number) - (a[sortBy] as number))
                    .slice(0, 4) // Display only the top 4 players
                    .map((stat, index) => (
                        <tr
                            key={stat.id}
                            className={index === 0 ? '' : ''} // Highlight the top player
                        >
                            <td className="flex items-center p-2">
                                <img src={`${stat.Name}.png`} className="w-[20px] h-[20px] mr-2" alt={`${stat.Name} logo`} />
                                {stat.Name}
                            </td>
                            <td className="p-2">{stat[sortBy]}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );



    return (
        <div className="flex h-fit w-[100%] bg-[#232323] justify-center items-center text-sm rounded-[20px] m-5">
            <div className="justify-center text-center">
                <div className="flex flex-row">
                    {renderTopPlayers("Scorer", "Goals")}
                    {renderTopPlayers("Assister", "Assists")}
                    {renderTopPlayers("Yellow", "Yellows")}
                    {renderTopPlayers("Red", "Reds")}
                </div>
            </div>
        </div>
    );
};

export default ISLstats;
