const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/log_in', (req, res) => {
  res.sendFile(__dirname + '/log_in.html');
});

app.get('/sign_up', (req, res) => {
  res.sendFile(__dirname + '/sign_up.html');
});

app.get('/xiaomi13', (req, res) => {
  res.sendFile(__dirname + '/xiaomi13.html');
});

server.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });