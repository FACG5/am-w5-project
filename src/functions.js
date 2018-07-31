const fs = require('fs');
const path = require('path');

const contentType = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'images/jpg',
  ico: 'images/ico',
  js: 'text/javascript',
};

const serveHome = (res, endpoint) => {
  const filePath = path.join(__dirname, '..', 'public', endpoint);
  const ext = endpoint.split('.')[1];
  res.writeHead(200, { 'Content-Type': `${contentType[ext]}` });
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.error(err);
    } else {
      res.end(file);
    }
  });
};

const serverNotFound = (res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 Error hahahaha</h1>');
};

module.exports = { serveHome, serverNotFound };
