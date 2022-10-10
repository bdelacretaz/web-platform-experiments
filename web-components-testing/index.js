// Minimal HTTP server
const serverPort = 30303;
const staticDir = `${__dirname}/static`;

console.log(`Starting server on port ${serverPort}`);

const fileServer = new(require('node-static').Server)(staticDir);
require('http').createServer(function (req, res) {
  fileServer.serve(req, res);
}).listen(serverPort);
