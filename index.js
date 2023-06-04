const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const host = 'localhost'
const data = fs.readFileSync('./database.json', 'utf8');

//document.getElementById("Brand").innerHTML = html;

const server = http.createServer((req, res) => {
const filePath = path.join(__dirname, 'index.html');
  
    fs.readFile(filePath, (err, content) => {
    if (err) {
        res.writeHead(500);
        res.end('An error has occured');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
    }
    });
});


server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

