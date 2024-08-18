const http = require('http');

function startServer() {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  });

  server.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
}

module.exports = {
  startServer,
};