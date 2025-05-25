const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url, 'req')
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found!');
        } else {
            const reg = /\.js$/
            if (reg.test(req.url)) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
            }
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});