const http = require('http');
const router = require('./router');


const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

const server = http.createServer(router);
server.listen(port, host, () => {
  console.log(`The server listens to port ${port} and host ${host}`);
});
