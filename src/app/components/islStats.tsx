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

    return (
        <div className="flex h-fit w-[100%] bg-[#232323] justify-center items-center text-sm rounded-[20px] m-5">
            <div className="justify-center text-center">
                <div className="flex flex-row">
                <table className=" w-full m-4 mx-auto">
                    <thead className="">
                        <tr>
                            <th className="text-start p-2">Top Scorer</th>
                            <th className="p-2">Goals</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {stats
                            .sort((a, b) => b.Goals - a.Goals)
                            .map((stat) => (
                                <tr key={stat.id}>
                                    <td className="flex items-center p-2">
                                        <img src={`${stat.Name}.png`} className='w-[20px] h-[20px] mr-2' alt={`${stat.Name} logo`} />
                                        {stat.Name}
                                    </td>
                                    <td className="p-2">{stat.Goals}</td>
                                    
                                </tr>
                            ))}
                    </tbody>
                </table>
                <table className=" w-full m-4 mx-auto">
                    <thead className="">
                        <tr>
                            <th className="text-start p-2">Top Assister</th>
                            <th className="p-2">Assists</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {stats
                            .sort((a, b) => b.Assists - a.Assists)
                            .map((stat) => (
                                <tr key={stat.id}>
                                    <td className="flex items-center p-2">
                                        <img src={`${stat.Name}.png`} className='w-[20px] h-[20px] mr-2' alt={`${stat.Name} logo`} />
                                        {stat.Name}
                                    </td>
                                    <td className="p-2">{stat.Assists}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <table className=" w-full m-4 mx-auto">
                    <thead className="">
                        <tr>
                            <th className="text-start p-2">Most Yellow</th>
                            <th className="p-2">Yellow</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {stats
                            .sort((a, b) => b.Yellows - a.Yellows)
                            .map((stat) => (
                                <tr key={stat.id}>
                                    <td className="flex items-center p-2">
                                        <img src={`${stat.Name}.png`} className='w-[20px] h-[20px] mr-2' alt={`${stat.Name} logo`} />
                                        {stat.Name}
                                    </td>
                                    <td className="p-2">{stat.Yellows}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                </div>
                {/* Team Leaderboard Table */}
                
            </div>
        </div>
    );
};

export default ISLstats;
