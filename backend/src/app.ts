import express from 'express';
import mysql from 'mysql2';
import 'dotenv/config';

const app = express();
const connectionString = process.env.DEV_DATABASE_URL || '';
const connection = mysql.createConnection(connectionString);
connection.connect();

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http:///localhost:${port}`);
});
