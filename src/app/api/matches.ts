import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Create a connection to your MySQL database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'football_database'
    });

    // Query the matches from your database
    const [rows] = await connection.execute('SELECT * FROM matches');

    // Send the results as the response
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data' });
  }
}
