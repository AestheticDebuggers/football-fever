import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { db } from '../firebase/config';

interface League {
  id: string;
  Name: string;
  PageSlug: string;
}

const Leagues = () => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const leaguesCollection = collection(db, "leagues");
        const querySnapshot = await getDocs(leaguesCollection);

        const leaguesData: League[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          leaguesData.push({
            id: doc.id,
            Name: data.Name,
            PageSlug: data.PageSlug,
          });
        });

        setLeagues(leaguesData);
      } catch (error) {
        setError('Error fetching leagues. Please try again.');
        console.error('Error fetching Leagues:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='h-fit min-w-[200px] bg-[#232323] rounded-[20px] m-5 p-5'>
      <div className="flex flex-col h-[65%]">
        <div className='font-semibold text-xl py-2'>Top Leagues</div>
        <div className='flex flex-col px-2'>
          {leagues.map((league) => (
            <Link key={league.id} href={`${league.PageSlug}`}>
              <p className='flex items-center gap-1'>
                <img src={`${league.Name}.png`} className='flex justify-center items-center w-[20px] h-[20px]' alt={`${league.Name} icon`} />
                <div className="p-2">{league.Name}</div>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leagues;

