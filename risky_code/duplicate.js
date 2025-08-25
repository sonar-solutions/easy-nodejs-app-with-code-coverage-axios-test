// Test Code
const { MongoClient } = require('mongodb');  
const express = require('express');
const app = express();

const mongoURI = 'mongodb://localhost:27017'; // Replace with your actual MongoDB URI

app.get('/your-endpoint', async (req, res) => {
  const client = new MongoClient(mongoURI);
  try {
    const database = client.db('example');
    const products = database.collection('product');
    const query = { $where: `isString(this.${req.query.prop})`};
    const product = await products.findOne(query); // Noncompliant
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
