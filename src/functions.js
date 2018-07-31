const fs = require('fs');
const path = require('path');
// const request = require('request');

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
  res.writeHead(200, { 'content-type': `${contentType[ext]}` });
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.error(err);
    } else {
      res.end(file);
    }
  });
};

// const serveAPI = (res, search) => {
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=4638dc94ad7887e67dc768fd6a6c909c`;
//   request.get(url, (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(data);
//     }
//   });
// };


const pageNotFound = (res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 Error hahahaha</h1>');
};

module.exports = { serveHome, pageNotFound };
