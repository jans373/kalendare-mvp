const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Backend běží správně!');
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});
