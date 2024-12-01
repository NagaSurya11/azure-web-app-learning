var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Welcome from Azure Web App Learning!')
})

app.listen(3000, () => {
  console.log('App Running on Port 3000');
})