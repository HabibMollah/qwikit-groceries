import express from 'express';
import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2';
import 'dotenv/config';

const app = express();
const connectionString = process.env.DEV_DATABASE_URL || '';
const connection = mysql.createConnection(connectionString);
connection.connect();

app.use(express.json());

const baseURL = '/api/v1';

// Create a grocery product
app.post(`${baseURL}/groceries`, (req, res) => {
  const { title, description, imageURL } = req.body;

  // Validate inputs
  if (!title) return res.status(400).json({ error: 'Title is required' });
  if (!description)
    return res.status(400).json({ error: 'Description is required' });
  if (!imageURL)
    return res.status(400).json({ error: 'Image url is required' });

  const query = `INSERT INTO groceries (title, description, imageURL)
                 VALUES (?, ?, ?);`;
  const values = [title, description, imageURL];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: 'Could not create the product', error: err });
    }
    const createdProduct = { results: results, title, description, imageURL };
    return res.status(201).json(createdProduct);
  });
});

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

// Get a grocery product by id
app.get(`${baseURL}/groceries/:id`, (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM groceries WHERE id = ?;`;
  connection.query(query, [id], (err, results: RowDataPacket[]) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: 'Could not retrieve the product', error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(results[0]);
  });
});

// Update a grocery product by id
app.put(`${baseURL}/groceries/:id`, (req, res) => {
  const id = req.params.id;
  const { title, description, imageURL } = req.body;

  // Validate inputs
  if (!title) return res.status(400).json({ error: 'Title is required' });
  if (!description)
    return res.status(400).json({ error: 'Description is required' });
  if (!imageURL) return res.status(400).json({ error: 'imageURL is required' });

  const query = `UPDATE groceries
                  SET title = ?,
                      description = ?,
                      imageUrl = ?
                        WHERE id = ?;`;

  connection.query(
    query,
    [title, description, imageURL, id],
    (err, results: ResultSetHeader) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Could not update the product' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json({ message: 'Product updated successfully' });
    }
  );
});

// Delete a grocery product by id
app.delete(`${baseURL}/groceries/:id`, (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM groceries WHERE id = ?';
  connection.query(query, [id], (err, result: ResultSetHeader) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Could not delete the product' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http:///localhost:${port}`);
});
