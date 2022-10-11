const { Server } = require('node-static');
const http = require('http');

// Minimal HTTP server
const serverPort = 30303;

console.log(`Starting server on port ${serverPort}`);

const staticFiles = new Server(`${__dirname}/static`);
const allFiles = new Server(__dirname);

// Serve from static folder first, else everything (to serve node_modules)
http.createServer((request, response) => {
  request.addListener('end', function () {
    staticFiles.serve(request, response, (e, _res) => {
      if (e && (e.status === 404)) {
        allFiles.serve(request, response);
      }
    });
  }).resume();
}).listen(serverPort);
