// pages/api/participants.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

interface Participant {
  name: string;
  PTS: number;
  GD: number;
  PLD: number;
  W: number;
  L: number;
  D: number;
  matches: { result: 'win' | 'draw' | 'loss' }[];
}

const fetchParticipantsFromDatabase = async (): Promise<Participant[]> => {
  // Replace with your actual MySQL database connection details
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'your_mysql_password',
    database: 'your_mysql_database',
  });

  try {
    const [rows] = await connection.query('SELECT * FROM participants');
    return rows as Participant[];
  } catch (error) {
    throw error;
  } finally {
    await connection.end();
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const participants = await fetchParticipantsFromDatabase();
      res.status(200).json(participants);
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
