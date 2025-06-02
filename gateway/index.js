const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());

// Proxy to User Service
app.post('/user/signup', async (req, res) => {
  const result = await axios.post('http://localhost:3001/signup', req.body);
  res.send(result.data);
});

// Proxy to Ride Booking
app.post('/ride/book', async (req, res) => {
  const result = await axios.post('http://localhost:3003/book', req.body);
  res.send(result.data);
});

app.listen(3000, () => console.log('Gateway running on port 3000'));
