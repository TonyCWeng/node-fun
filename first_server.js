const http = require('http');

const server = http.createServer((req, res) => {
  res.write('hello world');
  res.end();
});

// listen takes 2 arguments, an unoccupied port and a callback
server.listen(8000, () => console.log("I'm listening on port 8000"));
