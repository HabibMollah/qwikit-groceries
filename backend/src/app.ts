import express from 'express';
import mysql from 'mysql2';
import 'dotenv/config';

const app = express();
const connectionString = process.env.DEV_DATABASE_URL || '';
const connection = mysql.createConnection(connectionString);
connection.connect();

app.use(express.json());

const baseURL = '/api/v1';

// Get all grocery products
app.get(`${baseURL}/groceries`, (_req, res) => {
  const query = `SELECT * FROM groceries;`;
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.send(results);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http:///localhost:${port}`);
});
