const express = require('express');
const app = express();
const port = 3000;

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route pour une autre page
app.get('/create_account', (req, res) => {
  res.sendFile(__dirname + '/create_account.html');
});


server.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });