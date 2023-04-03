const http = require('http');

// http://[2a02:a45a:4099:1:6eee:cfb9:599:c8bd]:3000
const hostname = '2a02:a45a:4099:1:6eee:cfb9:599:c8bd';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 123');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
