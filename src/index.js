const express = require('express');

const app = express();

app.get('/fahrenheit/:value/celsius', (req, res) => {
  const {value} = req.params;

  const celsius = (value - 32) * 5 / 9;

  return res.json({ celsius })
})

app.get('/celsius/:value/fahrenheit', (req, res) => {
  const {value} = req.params;

  const fahrenheit = (value * 9 / 5) + 32;

  return res.json({ fahrenheit })
})

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server is running on port ${port}`))