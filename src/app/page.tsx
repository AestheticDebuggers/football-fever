// ... (import statements and other code)
"use client"
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Leagues from "./components/Leagues";
import ISLLeaderboard from "./components/islLeaderboard";
import { db } from "./firebase/config";
import { isToday } from "date-fns";

const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');



interface Match {
  id: string;
  league: string;
  Home: string;
  Away: string;
  date: Date | Timestamp;
}

function Home() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const matchesCollection = collection(db, 'matches');
        const querySnapshot = await getDocs(matchesCollection);
    
        const matchesData: Match[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const date = data.date instanceof Timestamp ? data.date.toDate() : (data.date as Date);
    
          // Check if the match date is today
          if ((date)) {
            matchesData.push({
              id: doc.id,
              league: data.League,
              Home: data.Home,
              Away: data.Away,
              date: date,
            });
          }
        });
        setMatches(matchesData);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (

    <div className='mx-auto flex flex-col min-h-screen  bg-[#111111]'>
      <Navbar />

      <div className='flex-grow flex'>
        <div className='flex-grow'>
          <Leagues />
        </div>
        <div className="flex flex-col bg-[#222222] w-[50%] justify-center h-fit p-4 mt-10  mx-auto space-y-4 rounded-lg">
          <h2 className="text-2xl text-white mb-4">Upcoming Matches</h2>
          <ul>
            {matches.map(match => (
              <li key={match.id} className="w-full mb-4">
                <div className="bg-[#333333] rounded-xl p-4  text-white items-center justify-center hover:text-teal-500 transition duration-300 transform hover:scale-105">
                  <div className="font-semibold p-2 text-xl">{match.league}</div>
                  <div className="flex w-full justify-between items-center">
                    <div className="font-poppins p-3">{match.Home} vs {match.Away}</div>
                    <div className="font-light">
                      {match.date instanceof Date
                        ? `${new Date(match.date).toLocaleDateString()} ${new Date(match.date).toLocaleTimeString()}`
                        : `${match.date.toDate().toLocaleDateString()} ${match.date.toDate().toLocaleTimeString()}`
                      }
                    </div>

                  </div>
                  {/* Add more details here, e.g., scores, date, etc. */}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-grow mr-4'>
          <ISLLeaderboard />
        </div>
      </div>
    </div>
  );
}

export default Home;