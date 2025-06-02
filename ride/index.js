const express = require('express');
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).json("Hello Welcome ride.")
});

app.listen(3002, () => console.log('Gateway running on port 3002'));
